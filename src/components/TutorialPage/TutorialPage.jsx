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

  const handleSkip = () => {
    navigate("/Home");
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-[900px] h-[500px]"
        controls
      >
        <source src="/MoneyMitraTutorialVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-4 right-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 shadow-lg"
      >
        Skip Video
      </button>
    </div>
  );
};

export default TutorialPage;