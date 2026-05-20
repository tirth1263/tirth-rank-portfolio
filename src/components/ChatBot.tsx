import { addDoc, collection, limit, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import type { User } from "firebase/auth";
import { Bot, Loader2, MessageSquare, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { chatPrompts } from "../data/portfolio";
import { db } from "../lib/firebase";
import { generatePortfolioAnswer, type ChatMode } from "../lib/ai";

type ChatMessage = {
  id?: string;
  role: "user" | "assistant";
  text: string;
  mode?: ChatMode;
};

type ChatBotProps = {
  user: User | null;
};

const introMessage: ChatMessage = {
  role: "assistant",
  text: "Hi, I am Tirth's portfolio assistant. I can answer questions about his robotics, AI, GenAI, education, projects, and contact details.",
  mode: "local"
};

export function ChatBot({ user }: ChatBotProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([introMessage]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  const history = useMemo(
    () => messages.map((message) => `${message.role}: ${message.text}`),
    [messages]
  );

  useEffect(() => {
    if (!user) {
      setMessages([introMessage]);
      return undefined;
    }

    const chatQuery = query(
      collection(db, "users", user.uid, "chatMessages"),
      orderBy("createdAt", "asc"),
      limit(40)
    );

    return onSnapshot(
      chatQuery,
      (snapshot) => {
        const saved = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Omit<ChatMessage, "id">)
        }));
        setMessages(saved.length ? saved : [introMessage]);
      },
      () => setMessages((current) => (current.length ? current : [introMessage]))
    );
  }, [user]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, busy, open]);

  async function saveMessage(message: ChatMessage) {
    if (!user) return;
    await addDoc(collection(db, "users", user.uid, "chatMessages"), {
      ...message,
      createdAt: serverTimestamp()
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const question = input.trim();
    if (!question || busy) return;

    const userMessage: ChatMessage = { role: "user", text: question };
    setInput("");
    setBusy(true);
    setMessages((current) => [...current, userMessage]);
    saveMessage(userMessage).catch(() => undefined);

    const answer = await generatePortfolioAnswer(question, history);
    const assistantMessage: ChatMessage = {
      role: "assistant",
      text: answer.text,
      mode: answer.mode
    };

    setMessages((current) => [...current, assistantMessage]);
    saveMessage(assistantMessage).catch(() => undefined);
    setBusy(false);
  }

  function usePrompt(prompt: string) {
    setInput(prompt);
    setOpen(true);
  }

  return (
    <>
      <div className={open ? "chat-panel open" : "chat-panel"} aria-live="polite">
        <div className="chat-header">
          <div>
            <span className="chat-kicker">
              <Sparkles size={14} />
              Firebase AI
            </span>
            <h2>Tirth AI</h2>
          </div>
          <button className="icon-button" type="button" aria-label="Close chat" onClick={() => setOpen(false)}>
            <X size={18} />
          </button>
        </div>

        <div className="prompt-row">
          {chatPrompts.slice(0, 3).map((prompt) => (
            <button type="button" key={prompt} onClick={() => usePrompt(prompt)}>
              {prompt}
            </button>
          ))}
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <div className={`message ${message.role}`} key={message.id || `${message.role}-${index}`}>
              <p>{message.text}</p>
              {message.role === "assistant" && (
                <span>{message.mode === "firebase-ai" ? "Gemini via Firebase" : "Portfolio local model"}</span>
              )}
            </div>
          ))}
          {busy && (
            <div className="message assistant loading">
              <Loader2 size={16} />
              <p>Thinking through the portfolio context...</p>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <form className="chat-input" onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about Tirth's work"
            aria-label="Ask the portfolio assistant"
          />
          <button className="icon-button send" type="submit" aria-label="Send message" disabled={busy || !input.trim()}>
            <Send size={18} />
          </button>
        </form>
      </div>

      <button className="chat-launcher" type="button" onClick={() => setOpen((next) => !next)} aria-label="Open AI chat">
        {open ? <X size={24} /> : <MessageSquare size={24} />}
        <Bot size={18} className="launcher-badge" />
      </button>
    </>
  );
}
