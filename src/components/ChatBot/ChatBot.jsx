import 'regenerator-runtime/runtime';
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { SendButton } from "../ChatBotSendButton/ChatBotSendButton";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Mic, MicOff } from 'lucide-react';

axios.defaults.baseURL = "http://localhost:5000";

const ChatHistory = ({ chatHistory }) => {
  const endOfMessagesRef = useRef(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  return (
    <div className="flex flex-col gap-2 overflow-y-auto">
      {chatHistory.map((entry, index) => (
        <div
          key={index}
          className={`max-w-[70%] break-words px-4 py-2 rounded-lg ${
            entry.type === "user"
              ? "bg-[#e7478f] text-white self-start"
              : "bg-[#e05080] text-white self-end"
          }`}
        >
          {entry.message}
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </div>
  );
};

const ChatBot = ({ onClose }) => {
  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isListening, setIsListening] = useState(false);

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    if (transcript) {
      setUserInput(transcript);
    }
  }, [transcript]);

  const handleUserInput = (e) => setUserInput(e.target.value);

  const toggleListening = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
    } else {
      resetTranscript();
      SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
      setIsListening(true);
    }
  };

  const sendMessage = () => {
    if (userInput.trim() === "") return;

    if (isListening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
    }

    setIsLoading(true);
    setErrorMessage("");

    axios.post("/api/chat", {
      message: userInput,
    })
      .then(response => {
        const botMessage = response.data.message;
        setChatHistory(prevHistory => [
          ...prevHistory,
          { type: "user", message: userInput },
          { type: "bot", message: botMessage },
        ]);
      })
      .catch(error => {
        console.error("Error sending message:", error);
        setErrorMessage(
          error.response?.data?.error ||
            "Something went wrong. Please try again later."
        );
      })
      .finally(() => {
        setUserInput("");
        resetTranscript();
        setIsLoading(false);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="text-red-500">
        Browser doesn't support speech recognition.
      </div>
    );
  }

  return (
    <div className="fixed top-[15%] right-10 bottom-0 w-[27rem] z-50 bg-zinc-800/50 bg-opacity-50 backdrop-blur-sm shadow-lg rounded-lg flex flex-col p-4 h-[83vh] overflow-hidden">
      <div className="flex-grow overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <ChatHistory chatHistory={chatHistory} />
      </div>
      
      {errorMessage && (
        <div className="text-red-500 font-semibold text-sm">{errorMessage}</div>
      )}

      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            value={userInput}
            onChange={handleUserInput}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            className="flex-grow px-4 py-2 rounded-xl shadow-sm focus:ring-2 focus:outline-none bg-gray-700/10 bg-opacity-50 text-white"
          />
          <button
            onClick={toggleListening}
            className={`p-2 rounded-full transition-colors ${
              isListening 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
            title={isListening ? 'Stop listening' : 'Start listening'}
          >
            {isListening ? (
              <MicOff className="h-5 w-5 text-white" />
            ) : (
              <Mic className="h-5 w-5 text-white" />
            )}
          </button>
          <SendButton
            isLoading={isLoading}
            onClick={sendMessage}
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;