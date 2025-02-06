import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const TutorialPage = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      navigate("/Home");
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
      videoElement.muted = false; // Enable audio
      videoElement.volume = 1.0;  // Set volume to max
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-full h-full object-cover"
        controls
      >
        <source src="/MoneyMitraTutorialVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TutorialPage;
