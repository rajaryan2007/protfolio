import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Portfolio data (replace with your real info)
  const portfolioData = {
    name: "Rajaryan",
    title: "Full Stack Developer,vulkan and openal dev",
    skills: ["C++", "JavaScript", "React", "Node.js", "OpenGL", "Vulkan","express.js","git,github","archLinux","davinci resolve"],
    projects: [
      { name: "3D Game Engine", desc: "working one this" },
      { name: "wallpaper site", desc: "MERN app deployed on Render." },
      { name: "Portfolio Website", desc: "Built with React & Tailwind, hosted on Vercel." },
    ],
    contact: "rajaryan1492007@gmail.com",
  };

  const ai = new GoogleGenAI({
    apiKey: "AIzaSyAt4xcC20nJYWFFpzSoYI3yyBkk5divMUg", // ⚠️ demo only
  });

  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);

    try {
      // Build context with portfolio info
      const context = `
You are a friendly chatbot for Raj's portfolio website. 
Always answer as if you are helping a visitor learn about Raj.

Portfolio Info:
- Name: ${portfolioData.name}
- Title: ${portfolioData.title}
- Skills: ${portfolioData.skills.join(", ")}
- Projects: 
${portfolioData.projects.map((p) => `   • ${p.name}: ${p.desc}`).join("\n")}
- Contact: ${portfolioData.contact}

Conversation so far:
${messages.map((m) => `${m.role}: ${m.content}`).join("\n")}
User: ${input}
      `;

      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: context,
        config: { thinkingConfig: { thinkingBudget: 0 } },
      });

      const botMsg = { role: "bot", content: response.text };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Gemini error:", err);
      const errorMsg = { role: "bot", content: "❌ Error: " + err.message };
      setMessages((prev) => [...prev, errorMsg]);
    }

    setInput("");
  }

  return (
    <div className="fixed bottom-5 right-5">
      {isOpen ? (
        <div className="w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col border">
          {/* Header */}
          <div className="p-2 bg-purple-600 text-white flex justify-between items-center rounded-t-xl">
            <span>🤖 Portfolio Bot</span>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.role === "user"
                    ? "bg-purple-100 ml-auto text-right"
                    : "bg-gray-200 mr-auto text-left"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-2 flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border p-1 rounded"
              placeholder="Ask me something..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-purple-600 text-white px-3 rounded"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
  className="bg-purple-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center"
  onClick={() => setIsOpen(true)}
>
  <svg
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="#ffffff"   // 👈 make it white to match your button
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.48 4h4l.5.5v2.03h.52l.5.5V8l-.5.5h-.52v3l-.5.5H9.36l-2.5 2.76L6 14.4V12H3.5l-.5-.64V8.5h-.5L2 8v-.97l.5-.5H3V4.36L3.53 4h4V2.86A1 1 0 0 1 7 2a1 1 0 0 1 2 0 1 1 0 0 1-.52.83V4zM12 8V5H4v5.86l2.5.14H7v2.19l1.8-2.04.35-.15H12V8zm-2.12.51a2.71 2.71 0 0 1-1.37.74v-.01a2.71 2.71 0 0 1-2.42-.74l-.7.71c.34.34.745.608 1.19.79.45.188.932.286 1.42.29a3.7 3.7 0 0 0 2.58-1.07l-.7-.71zM6.49 6.5h-1v1h1v-1zm3 0h1v1h-1v-1z"
    />
  </svg>
</button>

      )}
    </div>
  );
}
