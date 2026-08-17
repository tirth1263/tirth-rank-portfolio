import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
import { firebaseApp } from "./firebase";
import { portfolioContext, workTimeline } from "../data/portfolio";

export type ChatMode = "firebase-ai" | "local";

const stopWords = new Set([
  "the",
  "and",
  "for",
  "with",
  "that",
  "this",
  "are",
  "you",
  "your",
  "about",
  "what",
  "how",
  "can",
  "tell",
  "tirth",
  "rank"
]);

const localFacts = portfolioContext
  .split("\n")
  .map((line) => line.trim())
  .filter(Boolean);

const currentWork = workTimeline.filter((item) => /present/i.test(item.period));
const completedWork = workTimeline.filter((item) => !/present/i.test(item.period));

function tokenise(input: string) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 2 && !stopWords.has(word));
}

export function localPortfolioAnswer(question: string) {
  const lower = question.toLowerCase();

  if (/contact|email|phone|reach|linkedin|github/.test(lower)) {
    return "You can reach Tirth at tirthrank.work@gmail.com, connect on LinkedIn at linkedin.com/in/tirth-rank, or review projects on github.com/tirth1263.";
  }

  if (/education|degree|university|asu|gpa|college/.test(lower)) {
    return "Tirth is pursuing an M.S. in Robotics and Autonomous Systems with an AI concentration at Arizona State University, where his current GPA is 3.73/4.0. He earned a B.Tech in Artificial Intelligence and Machine Learning from SVKM's NMIMS with a 3.75/4.0 GPA.";
  }

  if (/skill|stack|tool|technology|language/.test(lower)) {
    return "Tirth's strongest stack is Python, TypeScript, SQL, PyTorch, TensorFlow, OpenCV, Pandas, NumPy, Scikit-Learn, MCP agents, LangChain, LangGraph, RAG, voice AI agents, Nebius Token Factory, Tableau, Excel, Rhino 3D, Grasshopper, MATLAB, Linux workflows, AutoCAD, and SolidWorks.";
  }

  if (/current|currently|present|now|working/.test(lower) && /work|working|role|job|position|where/.test(lower)) {
    return currentWork
      .map(
        (item) =>
          `Tirth is currently a ${item.title} at ${item.company} in ${item.location} (${item.period}). ${item.bullets[0]}`
      )
      .join(" ");
  }

  if (/experience|work|role|intern|job|researcher|lab/.test(lower)) {
    const currentSummary = currentWork
      .map((item) => `Current role: ${item.title} at ${item.company} (${item.period}).`)
      .join(" ");
    const completedSummary = completedWork
      .slice(0, 3)
      .map((item) => `Completed role: ${item.title} at ${item.company} (${item.period}).`)
      .join(" ");

    return `${currentSummary} ${completedSummary}`.trim();
  }

  if (/project|portfolio|built|genai|llm|vision|robot|mcp|agent|voice/.test(lower)) {
    return "Tirth's featured projects span robotics, ML/data systems, and MCP/voice AI. The MCP agent highlights include GitHub MCP Agent, LangGraph MCP Agent, Doc-MCP, Enterprise MCP Database Server, AI Agent Discovery Agent, and Multi-Agent Orchestration System. He also showcases voice AI projects like VoxCode, LiveKit Voice Agent with Web Search, and Healthcare Voice Contact Center.";
  }

  const tokens = tokenise(question);
  const ranked = localFacts
    .map((fact) => {
      const factTokens = tokenise(fact);
      const score = tokens.reduce(
        (total, token) => total + (factTokens.includes(token) ? 1 : 0),
        0
      );
      return { fact, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (ranked.length === 0) {
    return "I can help with Tirth's robotics, AI, computer vision, GenAI, education, projects, work experience, publications, or contact details. Try asking about one of those areas.";
  }

  return ranked.map((item) => item.fact).join(" ");
}

export async function generatePortfolioAnswer(
  question: string,
  recentMessages: string[]
): Promise<{ text: string; mode: ChatMode }> {
  const prompt = `
You are Tirth Rank's portfolio assistant. Answer in first person only when it sounds natural for a portfolio assistant, otherwise say "Tirth".
Use only the provided context. Do not invent job titles, awards, metrics, links, or publications.
When the visitor asks where Tirth is currently working, answer with only active Current role entries first. Do not lead with completed roles for current-work questions.
Keep answers concise, useful, and recruiter-friendly.

Context:
${portfolioContext}

Recent chat:
${recentMessages.slice(-6).join("\n")}

Visitor question:
${question}
`;

  try {
    const ai = getAI(firebaseApp, { backend: new GoogleAIBackend() });
    const model = getGenerativeModel(ai, { model: "gemini-3.5-flash" });
    const result = await model.generateContent(prompt);
    const text = result.response.text().trim();

    if (text) {
      return { text, mode: "firebase-ai" };
    }
  } catch (error) {
    console.warn("Firebase AI Logic fell back to local answer:", error);
  }

  return { text: localPortfolioAnswer(question), mode: "local" };
}
