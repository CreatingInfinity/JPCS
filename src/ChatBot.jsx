import React, { useState, useRef, useEffect } from "react";
import { chatBot, chatBotAnimation } from "./utils";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentMessage = input;
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.message }]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Something went wrong." },
      ]);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };
  return (
    <>
      {/* Floating ChatBot Icon */}
      <div
        onClick={() => setOpen(!open)}
        className="fixed bottom-7 border border-white rounded-full cursor-pointer bg-white right-7 z-50 shadow-lg"
      >
        <img id="chatBot" className="" src={chatBot} alt="chatBot" />
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-7 w-90 h-110 bg-white shadow-lg border border-gray-300 rounded-lg px-5 py-5 z-45 flex flex-col">
          {/* Chat Messages */}
          <div
            ref={chatRef}
            className="flex-1 flex flex-col overflow-y-auto space-y-2 text-gray-800 poppins-regular text-sm pr-1"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-100 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input Section */}
          <div className="mt-2 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 border-1 border-gray-800 rounded-l px-2 py-1 text-sm focus:outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="bg-orange-600 text-white px-3 py-1 cursor-pointer rounded-r text-sm transition-all duration-300 hover:bg-orange-500"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
