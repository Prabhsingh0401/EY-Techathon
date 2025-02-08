import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home/Home";
import ChatBotMain from "./components/ChatBotMain/ChatBotMain";
import VideoMain from "./components/VideoMain/VideoMain";
import Profile from "./components/Profile/Profile";
import Spendly from "./components/BudgettingTool/BudgettingTool";
import { VideoRoom2 } from "./components/VideoNewPage/VideoRoom2";
import LearningPath from "./components/LearningPath/LearningPath";
import InvestiMate from "./components/InvestmentPlanning/InvestmentPlanningTool";
import LandingPage from "./components/LandingPage/LandingPage";
import TutorialPage from "./components/TutorialPage/TutorialPage";
import ChatApp from "./components/ChatApp/ChatApp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/SamvaadAI" element={<ChatBotMain />} />
          <Route path="/Video" element={<VideoMain />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Spendly" element={<Spendly />} />
          <Route path="/VideoRoom2" element={<VideoRoom2 />} />
          <Route path="/LearningPath" element={<LearningPath />} />
          <Route path="/InvestiMate" element={<InvestiMate />} />
          <Route path="/Tutorial" element={<TutorialPage />} />
          <Route path="/ChatApp" element={<ChatApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
