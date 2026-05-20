import { getAI, getGenerativeModel, GoogleAIBackend } from "firebase/ai";
import { firebaseApp } from "./firebase";
import { portfolioContext } from "../data/portfolio";

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
    return "Tirth's strongest stack is Python, SQL, PyTorch, TensorFlow, OpenCV, Pandas, NumPy, Scikit-Learn, LLM workflows, prompt engineering, embeddings, RAG, Tableau, Excel, MATLAB, Linux workflows, AutoCAD, and SolidWorks.";
  }

  if (/project|portfolio|built|genai|llm|vision|robot/.test(lower)) {
    return "His portfolio includes an active learning and label quality pipeline, an LLM labeling agent for trip intelligence, multimodal GSAT prediction, a GenAI evaluation framework, visual question answering, real-time fruit detection, leaf disease detection, spam detection, AI noise cancellation, and an IoT gesture-controlled speaker.";
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
