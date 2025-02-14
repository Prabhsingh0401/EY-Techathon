import io from "socket.io-client";
import { useState } from "react";
import { Chat } from "./Chat";
const socket = io.connect("http://localhost:1000"); // Make sure it's HTTP

const ChatMentor = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinChat = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <>  
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center bg-slate-500 p-5 rounded-lg shadow-lg h-[300px] w-[500px] gap-3">
        <h1 className="text-3xl font-black">Join Chat</h1>
        <input
          type="text"
          className="border p-2 rounded w-full text-black"
          placeholder="Enter Name"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="border p-2 rounded w-full text-black"
          placeholder="Enter Room"
          onChange={(e) => setRoom(e.target.value)}
        />
        <button onClick={joinChat} className="bg-blue-500 px-4 py-2 w-[200px] mt-5 rounded hover:bg-blue-600">
          Join
        </button>
      </div>
    </div>
    <Chat socket={socket} username={username} room={room}/>
    </>  
   
  );
};

export default ChatMentor;
