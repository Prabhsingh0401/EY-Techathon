import React, { useState, useEffect, useRef } from "react";
import { SendHorizonal } from "lucide-react";

export const Chat = ({ socket, username, room }) => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const containerRef = useRef(null); // Ref for auto-scrolling

  useEffect(() => {
    const handleReceiveMsg = (data) => {
      setMessageList((list) => [...list, data]);
    };
    socket.on("receive_message", handleReceiveMsg);
    return () => {
      socket.off("receive_message", handleReceiveMsg);
    };
  }, [socket]);

  // Auto-scroll to the latest message
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messageList]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        id: Math.random(),
        room: room,
        author: username,
        message: currentMessage,
        time: new Date(Date.now()).getHours() % 12 + ":" + new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="w-[400px] h-[500px] flex flex-col bg-slate-800 text-white rounded-lg shadow-lg p-4">
      <h1 className="text-xl font-semibold mb-4">Welcome, {username}</h1>

      {/* Chat Messages */}
      <div
        ref={containerRef} // Apply ref here
        className="flex-1 overflow-y-auto p-3 rounded-md mb-4 flex flex-col gap-2"
      >
        {messageList.map((data) => (
          <div key={data.id} className={`flex ${data.author === username ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-2 rounded-lg max-w-[75%] ${
                data.author === username ? "bg-blue-500 text-white self-end" : "bg-gray-700 text-white self-start"
              }`}
            >
              <p>{data.message}</p>
              <div className="flex justify-between text-xs opacity-80 mt-1">
                <p>{data.author}</p>
                <p>{data.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="flex items-center gap-2">
        <input
          value={currentMessage}
          type="text"
          className="flex-1 p-2 rounded-md bg-slate-600 text-white outline-none border border-slate-500"
          placeholder="Type a message..."
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={sendMessage} className="bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition">
          <SendHorizonal className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};
