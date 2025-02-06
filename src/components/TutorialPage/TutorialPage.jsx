import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TutorialPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Home");
    }, 15000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black">
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/MoneyMitraTutorialVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TutorialPage;
