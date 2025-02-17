import React, { useState, useEffect, useRef } from "react";
import NavBar from "../NavBar/NavBar";
import image1 from "../../assets/K.jpeg";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import io from "socket.io-client";
import { SendHorizonal } from "lucide-react";

const socket = io.connect("http://localhost:1000");

function Profile() {
  const [joined, setJoined] = useState(false);
  const [date, setDate] = useState(new Date());
  const [showChat, setShowChat] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [username, setUsername] = useState("");
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const roomId = "mentor-monika";
    socket.emit("join_room", roomId);
  }, []);

  useEffect(() => {
    // Ensure input maintains focus when chat is shown
    if (showChat && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showChat]);

  useEffect(() => {
    const handleReceiveMsg = (data) => {
      setMessageList((prevList) => [...prevList, data]);
    };
    socket.on("receive_message", handleReceiveMsg);
    return () => {
      socket.off("receive_message", handleReceiveMsg);
    };
  }, []);

  const sendMessage = async () => {
    if (currentMessage.trim() !== "" && username !== "") {
      const messageData = {
        id: Math.random(),
        room: "mentor-monika",
        author: username,
        message: currentMessage,
        time: 
          `${new Date().getHours() % 12 || 12}:${String(new Date().getMinutes()).padStart(2, '0')}`,
      };
      
      try {
        await socket.emit("send_message", messageData);
        setMessageList((prevList) => [...prevList, messageData]);
        setCurrentMessage("");
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const handleStartChat = () => {
    if (!isUsernameSet) {
      const randomUser = `User${Math.floor(Math.random() * 1000)}`;
      setUsername(randomUser);
      setIsUsernameSet(true);
    }
    setShowChat(!showChat);
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    setCurrentMessage(value);
    if (inputRef.current) {
      const cursorPosition = inputRef.current.selectionStart;
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.setSelectionRange(cursorPosition, cursorPosition);
      }, 0);
    }
  };

  const ChatInterface = () => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
      scrollToBottom();
    }, [messageList]);

    return (
      <div className="w-[390px] h-[450px] flex flex-col bg-slate-700 rounded-lg shadow-lg p-4 ml-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Chat with Mentor ✨</h1>
        </div>
        
        <div className="flex-1 overflow-y-auto p-3 rounded-md mb-4 flex flex-col gap-2 bg-slate-800">
        {messageList.map((data) => (
          <div key={data.id} className={`flex ${data.author === username ? "justify-end" : "justify-start"}`}>
            <div
              className={`p-2 rounded-lg max-w-[75%] ${
                data.author === username ? "bg-blue-500 text-white self-end" : "bg-gray-700 text-white self-start"
              }`}
            >
              <p className="break-words">{data.message}</p>
              <div className="flex justify-end text-xs opacity-80 mt-1">
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

        <div className="flex items-center gap-2">
          <input
            ref={inputRef}
            value={currentMessage}
            type="text"
            className="flex-1 p-2 rounded-md bg-slate-600 text-white outline-none border border-slate-500"
            placeholder="Type a message..."
            onChange={handleInputChange}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                sendMessage();
              }
            }}
            autoFocus
          />
          <button 
            onClick={sendMessage} 
            className="bg-blue-500 p-2 rounded-md hover:bg-blue-600 transition"
          >
            <SendHorizonal className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <NavBar />
      <div className="container relative top-[6vw] left-[10vw] w-[90vw] flex h-screen">
        {/* Left Section */}
        <div className="left w-[50%] text-white mt-40">
          <img src={image1} alt="" className="w-[200px] h-[200px] rounded-full ml-16" />
          <h1 className="mt-7 ml-24 text-4xl">Kirti Suri</h1>
          <p className="ml-28 mt-2">Financial Coach</p>
        </div>

        <div className="right w-screen h-[87vh] bg-gray-800 text-white p-10 rounded-lg shadow-lg">
          <div className="flex">
            <div className="flex-1">
              <h1 className="text-4xl mt-5">About Me</h1>
              <p className="mt-5 text-lg text-pretty">
              Kriti Suri is a Financial Coach dedicated to empowering women with financial knowledge and confidence. She provides practical strategies and personalized guidance to help women manage their finances effectively and achieve financial independence.<br></br><br></br> Kriti focuses on addressing the unique financial challenges faced by women, ensuring they have the tools and resources to make informed financial decisions. Her mission is to make personal finance accessible and inclusive, inspiring women to take control of their financial journeys.
           </p>
            </div>

            {showChat ? (
              <ChatInterface />
            ) : (
              <div>
                <h2 className="text-xl font-bold mt-10 mb-1 ml-5">Schedule a Video Call</h2>
                <div className="flex flex-col items-center p-4 rounded-xl w-full md:w-[370px]">
                  <Calendar
                    onChange={setDate}
                    value={date}
                    className="w-full p-2 bg-gray-800 text-black rounded-xl"
                  />
                  <p className="mt-3 text-lg text-gray-300">
                    Selected Date: <span className="text-blue-400">{date.toDateString()}</span>
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex mt-5">
            {!joined && (
              <Link to="/VideoRoom2">
                <button
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => setJoined(true)}
                >
                  Get on a Video Call
                </button>
              </Link>
            )}

            <button
              className="ml-5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleStartChat}
            >
              {showChat ? "Hide Chat" : "Chat with the Mentors!"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;