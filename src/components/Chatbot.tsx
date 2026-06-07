import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type FormEvent,
  type KeyboardEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  matchRule,
  fallbackResponse,
  fallbackSuggestions,
} from "../utils/chatbotKnowledge";

/* ─── Types ─── */
interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  timestamp: Date;
  suggestions?: string[];
}

/* ─── Link parser ─── */
function renderLinks(text: string): React.ReactNode {
  const regex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|((?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*[^.,\s])?)|(@[a-zA-Z0-9_.]+)/g;
  const parts = text.split(regex);
  if (parts.length === 1) return text;
  
  return parts.map((part, i) => {
    if (!part) return null;
    
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(part)) {
      return (
        <a
          key={i}
          href={`mailto:${part}`}
          className="text-glow-blue hover:underline font-medium break-all"
        >
          {part}
        </a>
      );
    }
    
    if (/^(?:https?:\/\/)?(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(?:\/[^\s]*[^.,\s])?$/.test(part)) {
      // Exclude framework names ending in .js (e.g., React.js, Next.js, Express.js) unless they start with http or www
      if (/\.js$/i.test(part) && !/^(?:https?:\/\/|www\.)/i.test(part)) {
        return part;
      }
      
      const href = part.startsWith("http") ? part : `https://${part}`;
      return (
        <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-glow-blue hover:underline font-medium break-all"
        >
          {part}
        </a>
      );
    }

    if (/^@[a-zA-Z0-9_.]+$/.test(part)) {
      return (
        <a
          key={i}
          href={`https://instagram.com/${part.slice(1)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-glow-blue hover:underline font-medium break-all"
        >
          {part}
        </a>
      );
    }
    
    return part;
  });
}

/* ─── Markdown-lite renderer (bold & links) ─── */
function renderMarkdown(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-glow-blue font-semibold">
          {renderLinks(part.slice(2, -2))}
        </strong>
      );
    }
    return <span key={i}>{renderLinks(part)}</span>;
  });
}

/* ─── Typing Indicator ─── */
function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-glow-blue/60"
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.1, 0.8] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* ─── Chat Bubble ─── */
function ChatBubble({
  message,
  onSuggestionClick,
}: {
  message: Message;
  onSuggestionClick?: (text: string) => void;
}) {
  const isBot = message.role === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`flex ${isBot ? "justify-start" : "justify-end"} mb-3`}
    >
      <div
        className={`flex gap-2 max-w-[85%] ${isBot ? "flex-row" : "flex-row-reverse"}`}
      >
        {/* Avatar */}
        {isBot && (
          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-bioluminescent-purple to-glow-blue flex items-center justify-center text-xs mt-1 shadow-md">
            🐠
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          {/* Bubble */}
          <div
            className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
              isBot
                ? "bg-white/[0.04] border border-white/[0.08] text-ocean-text/90 rounded-tl-md backdrop-blur-sm"
                : "bg-gradient-to-r from-bioluminescent-purple/80 to-glow-blue/80 text-white rounded-tr-md shadow-sm"
            }`}
          >
            {isBot ? renderMarkdown(message.text) : message.text}
          </div>

          {/* Suggestions */}
          {isBot && message.suggestions && message.suggestions.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-1">
              {message.suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => onSuggestionClick?.(s)}
                  className="px-3 py-1.5 text-xs rounded-full border border-glow-blue/20 text-glow-blue/80 bg-glow-blue/[0.04] hover:bg-glow-blue/10 hover:border-glow-blue/40 transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════
   Main Chatbot Component
   ═══════════════════════════════════════════ */
export default function Chatbot() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("id") ? "id" : "en";

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const uid = useCallback(() => Math.random().toString(36).slice(2, 9), []);

  /* Auto-scroll to bottom */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  /* Focus input when opening */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  /* Show welcome message on first open */
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        const welcomeMsg: Message = {
          id: uid(),
          role: "bot",
          text:
            lang === "id"
              ? "Halo! 👋 Saya asisten virtual Alif. Tanya saya apa saja tentang skill, pengalaman, atau proyek-proyeknya!"
              : "Hey! 👋 I'm Alif's virtual assistant. Ask me anything about his skills, experience, or projects!",
          timestamp: new Date(),
          suggestions:
            lang === "id"
              ? [
                  "Bisa saya bicara dengan Alif?",
                  "Apa saja skill-nya?",
                  "Tunjukkan proyek-proyeknya",
                ]
              : [
                  "Can I talk with Alif?",
                  "What are his skills?",
                  "Show me his projects",
                ],
        };
        setMessages([welcomeMsg]);
        setIsTyping(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  /* Process user message */
  const handleSend = useCallback(
    (text?: string) => {
      const messageText = (text || input).trim();
      if (!messageText) return;

      // Add user message
      const userMsg: Message = {
        id: uid(),
        role: "user",
        text: messageText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");

      // Auto-resize textarea back
      if (inputRef.current) {
        inputRef.current.style.height = "auto";
      }

      // Simulate typing then respond
      setIsTyping(true);
      const typingDelay = 400 + Math.random() * 800;

      setTimeout(() => {
        const rule = matchRule(messageText);

        const botMsg: Message = {
          id: uid(),
          role: "bot",
          text: rule ? rule.response[lang] : fallbackResponse[lang],
          timestamp: new Date(),
          suggestions:
            rule?.suggestions?.[lang] ??
            (rule ? undefined : fallbackSuggestions[lang]),
        };

        setMessages((prev) => [...prev, botMsg]);
        setIsTyping(false);

        // Trigger notification badge when closed
        if (!isOpen) {
          setHasNewMessage(true);
        }
      }, typingDelay);
    },
    [input, lang, uid, isOpen],
  );

  /* Handle form submit */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSend();
  };

  /* Handle Enter key (Shift+Enter for new line) */
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  /* Auto-resize textarea */
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 100) + "px";
  };

  /* Toggle open/close */
  const toggleChat = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
  };

  return (
    <>
      {/* ═══ Chat Window ═══ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatContainerRef}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            data-lenis-prevent
            className="fixed bottom-24 right-4 sm:right-6 z-[999] w-[min(380px,calc(100vw-2rem))] overflow-hidden flex flex-col rounded-2xl"
            style={{
              height: "min(520px, calc(100vh - 140px))",
              background:
                "linear-gradient(180deg, rgba(7,20,38,0.97) 0%, rgba(2,6,23,0.98) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: `
                0 20px 60px rgba(0,0,0,0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.05)
              `,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* ─── Header ─── */}
            <div
              className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(91,91,247,0.08) 0%, rgba(124,140,255,0.03) 100%)",
              }}
            >
              <div className="flex items-center gap-3">
                {/* Animated avatar */}
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-bioluminescent-purple to-glow-blue flex items-center justify-center text-base">
                    🐠
                  </div>
                  {/* Online indicator */}
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-deep-ocean" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ocean-text tracking-wide">
                    {lang === "id" ? "Asisten Deep Sea" : "Deep Sea Assistant"}
                  </h3>
                  <p className="text-[11px] text-ocean-text/40 font-medium">
                    {lang === "id" ? "Selalu online" : "Always online"}
                  </p>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={toggleChat}
                className="w-8 h-8 rounded-full flex items-center justify-center text-ocean-text/40 hover:text-ocean-text/80 hover:bg-white/[0.06] transition-all duration-200 cursor-pointer"
                aria-label="Close chat"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M1 1L13 13M1 13L13 1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* ─── Messages ─── */}
            <div className="flex-1 overflow-y-auto px-4 py-4 chatbot-scrollbar">
              {messages.map((msg) => (
                <ChatBubble
                  key={msg.id}
                  message={msg}
                  onSuggestionClick={(t) => handleSend(t)}
                />
              ))}
              {isTyping && <TypingIndicator />}
              <div ref={messagesEndRef} />
            </div>

            {/* ─── Input ─── */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 border-t border-white/[0.06]"
              style={{
                background: "rgba(2,6,23,0.6)",
              }}
            >
              <div className="flex items-end gap-2 bg-white/[0.04] border border-white/[0.08] rounded-2xl px-4 py-2 focus-within:border-glow-blue/30 transition-all duration-200">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    lang === "id" ? "Ketik pesan..." : "Type a message..."
                  }
                  rows={1}
                  className="flex-1 bg-transparent text-sm text-ocean-text/90 placeholder:text-ocean-text/25 outline-none resize-none max-h-[100px] leading-relaxed py-1"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer disabled:opacity-30 disabled:cursor-default bg-gradient-to-r from-bioluminescent-purple to-glow-blue active:scale-90"
                  aria-label="Send message"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="translate-x-[-1px] translate-y-[1px]"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ Floating Action Button ═══ */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-4 sm:right-6 z-[999] w-14 h-14 rounded-full flex items-center justify-center cursor-pointer shadow-lg group"
        style={{
          background: "linear-gradient(135deg, #5B5BF7 0%, #7C8CFF 100%)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.35)",
        }}
        whileHover={{
          scale: 1.08,
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.45)",
        }}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle chatbot"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M18 6L6 18M6 6L18 18"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <path
                d="M21 11.5C21 16.75 16.75 21 11.5 21C10.13 21 8.84 20.7 7.68 20.18L3 21L3.82 16.32C3.3 15.16 3 13.87 3 12.5C3 7.25 7.25 3 12.5 3C17.75 3 21 6.25 21 11.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="8.5" cy="12" r="1" fill="white" />
              <circle cx="12.5" cy="12" r="1" fill="white" />
              <circle cx="16.5" cy="12" r="1" fill="white" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Notification badge */}
        <AnimatePresence>
          {hasNewMessage && !isOpen && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-[10px] font-bold text-white flex items-center justify-center shadow-md"
            >
              1
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
