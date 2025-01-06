import React, { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer2 } from "./VideoPlayer2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophoneSlash, faHandPaper, faPhoneSlash } from "@fortawesome/free-solid-svg-icons"; // Import icons

const APP_ID = "ac2703345eeb4ceb9fe4cade2f598cac";
const TOKEN =
  "007eJxTYPjqXLLsw7K30x55MHcWbA0OFecvV1riP03jbPUCk97zRa0KDInJRuYGxsYmpqmpSSbJqUmWaakmyYkpqUZpppYWyYnJ1y5VpzcEMjI8esHDyMgAgSA+F0OYv6ezq4Kzo48PAwMAg9gisw==";
const CHANNEL = "VOICE CALL";

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
});

export const VideoRoom2 = () => {
  const [user, setUser] = useState([]);
  const [isMuted, setIsMuted] = useState(false);

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
    // Implement functionality like sending a signal to other users
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
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
          } text-white shadow-lg hover:scale-110 transition-transform`}
        >
          <FontAwesomeIcon icon={faMicrophoneSlash} size="lg" />
        </button>
        <button
          onClick={handleRaiseHand}
          className="p-4 bg-yellow-500 rounded-full text-white shadow-lg hover:scale-110 transition-transform"
        >
          <FontAwesomeIcon icon={faHandPaper} size="lg" />
        </button>
        <button
          onClick={leaveChannel}
          className="p-4 bg-red-600 rounded-full text-white shadow-lg hover:scale-110 transition-transform"
        >
          <FontAwesomeIcon icon={faPhoneSlash} size="lg" />
        </button>
      </div>
    </div>
  );
};
