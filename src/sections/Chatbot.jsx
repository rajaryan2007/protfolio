import { useState, useRef, useEffect } from "react";
import SpotlightCard from "../components/SpotlightCard";
import { FaPaperPlane, FaTimes, FaRobot } from "react-icons/fa";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  const portfolioData = {
    name: "Rajaryan",
    title: "Full Stack Developer, Vulkan and OpenGL dev",
    skills: ["C++", "JavaScript", "React", "Node.js", "OpenGL", "Vulkan", "Express.js", "Git/GitHub", "Arch Linux", "DaVinci Resolve"],
    projects: [
      { name: "3D Game Engine", desc: "Working on this" },
      { name: "Wallpaper Site", desc: "MERN app with full management features." },
      { name: "Asset Manager", desc: "Digital asset system with PayPal integration." },
    ],
    contact: "rajaryan1492007@gmail.com",
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const context = `
        You are a friendly chatbot for Raj's portfolio.
        Raj is a Class 12 student and developer from Delhi, India.
        Name: ${portfolioData.name}
        Skills: ${portfolioData.skills.join(", ")}
        Contact: ${portfolioData.contact}
        User says: ${input}
      `;

      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyAt4xcC20nJYWFFpzSoYI3yyBkk5divMUg",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: context }] }],
          }),
        }
      );

      const data = await response.json();
      const botMsg = {
        role: "bot",
        content: data?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm not sure how to respond to that, but feel free to email Raj directly!",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Chatbot error:", err);
      setMessages((prev) => [...prev, { role: "bot", content: "Sorry, I'm having a technical glitch. Please try again later!" }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {isOpen ? (
        <SpotlightCard className="w-80 sm:w-96 h-[500px] flex flex-col p-0 overflow-hidden shadow-2xl border-white/20" spotlightColor="rgba(34, 211, 238, 0.2)">
          <div className="p-4 bg-gradient-to-r from-cyan-900 to-blue-900 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cyan-400/20 flex items-center justify-center border border-cyan-400/40">
                <FaRobot />
              </div>
              <div>
                <p className="text-sm font-bold">Portfolio AI</p>
                <p className="text-[10px] text-cyan-300 opacity-80">Online</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <FaTimes />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-950/50">
            {messages.length === 0 && (
              <div className="text-center py-10">
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4 text-cyan-400">
                  <FaRobot size={32} />
                </div>
                <p className="text-gray-400 text-sm">Hello! Ask me anything about Raj's skills, projects, or experience.</p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === "user"
                      ? "bg-cyan-600 text-white rounded-br-none"
                      : "bg-white/10 text-gray-200 border border-white/5 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl flex gap-1">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-neutral-900 border-t border-white/5 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-white/5 border border-white/10 p-3 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-400/50"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-black p-3 rounded-xl transition-all active:scale-95"
            >
              <FaPaperPlane />
            </button>
          </div>
        </SpotlightCard>
      ) : (
        <button
          className="w-16 h-16 bg-cyan-500 hover:bg-cyan-600 text-black rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center justify-center transition-all hover:scale-110 active:scale-95 group"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative">
            <FaRobot size={28} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 border-2 border-black rounded-full" />
          </div>
        </button>
      )}
    </div>
  );
}

