import React, { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import DOMPurify from "dompurify";
import "./index.scss";

const ChatHistory = ({ chatHistory }) => {
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="chat-history-container bg-white p-4 rounded-lg shadow-sm overflow-y-auto max-h-96">
      {chatHistory.map((message, index) => (
        <div
          key={index}
          className={`flex items-start py-2 px-4 mb-2 rounded-lg ${
            message.type === "user"
              ? "bg-gray-100 text-gray-800 self-end"
              : "bg-blue-100 text-blue-800 self-start"
          }`}
        >
          <span
            className={`mr-2 font-bold ${
              message.type === "user" ? "text-gray-600" : "text-blue-600"
            }`}
          >
            {message.type === "user" ? "You:" : "Bot:"}
          </span>

          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                ReactMarkdown.render(message.message, { remarkPlugins: [remarkGfm] })
              ),
            }}
          />
        </div>
      ))}
      <div ref={chatEndRef} />
    </div>
  );
};

export default ChatHistory;
