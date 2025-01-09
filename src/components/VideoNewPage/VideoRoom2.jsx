import React, { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer2 } from "./VideoPlayer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneSlash, faHandPaper, faPhoneSlash } from "@fortawesome/free-solid-svg-icons"; // Import icons

const APP_ID = "ac2703345eeb4ceb9fe4cade2f598cac";
const TOKEN =
  "007eJxTYBCaEnzssVNimFP6O71sx40bLy2Z621y2fmVaZyQ5nmu2FMKDInJRuYGxsYmpqmpSSbJqUmWaakmyYkpqUZpppYWyYnJczbVpzcEMjK0bRRjZWSAQBCfiyHM39PZVcHZ0ceHgQEAA0Qg2Q==";
const CHANNEL = "VOICE CALL";

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
});

export const VideoRoom2 = () => {
  const [user, setUser] = useState([]);
  const [isMuted, setIsMuted] = useState(false);
  const [dateTime, setDateTime] = useState("");

  const handleUserJoined = async (user, mediaType) => {
    await client.subscribe(user, mediaType);
    if (mediaType === "video") {
      setUser((previousUser) => [...previousUser, user]);
    }
  };

  const handleUserLeft = (user) => {
    setUser((previousUser) =>
      previousUser.filter((u) => u.uid !== user.uid)
    );
  };

  const toggleMute = () => {
    const localUser = user.find((u) => u.uid === client.uid);
    if (localUser) {
      if (isMuted) {
        localUser.audioTrack.setEnabled(true);
      } else {
        localUser.audioTrack.setEnabled(false);
      }
      setIsMuted(!isMuted);
    }
  };

  const handleRaiseHand = () => {
    alert("Raise hand functionality is clicked!");
  };

  const leaveChannel = async () => {
    await client.leave();
    setUser([]);
    alert("You have left the meeting.");
  };

  useEffect(() => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN, null)
      .then((uid) =>
        Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), uid])
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setUser((previousUsers) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack,
          },
        ]);
        client.publish(tracks);
      });

    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const formattedTime = now.toLocaleTimeString("en-US");
      setDateTime(`${formattedDate}, ${formattedTime}`);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-600">
      <div className="grid grid-cols-2 gap-4 max-w-5xl w-full">
        {user.map((user) => (
          <VideoPlayer2 key={user.uid} user={user} />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-6">
        <button
          onClick={toggleMute}
          className={`p-4 rounded-full ${
            isMuted ? "bg-red-500" : "bg-green-500"
          } text-black shadow-lg hover:scale-110 transition-transform`}
        >
          <FontAwesomeIcon icon={faMicrophoneSlash} size="lg" color="black" />
        </button>
        <button
          onClick={handleRaiseHand}
          className="p-4 bg-yellow-500 rounded-full text-black shadow-lg hover:scale-110 transition-transform"
        >
          <FontAwesomeIcon icon={faHandPaper} size="lg" color="black" />
        </button>
        <button
          onClick={leaveChannel}
          className="p-4 bg-red-600 rounded-full text-black shadow-lg hover:scale-110 transition-transform"
        >
          <FontAwesomeIcon icon={faPhoneSlash} size="lg" color="black" />
        </button>
      </div>

      {/* Date and Time */}
      <div className="absolute bottom-6 right-4 bg-gray-800 text-white py-2 px-4 rounded-lg shadow-lg">
        {dateTime}
      </div>
    </div>
  );
};
