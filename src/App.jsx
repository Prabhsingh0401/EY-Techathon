import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./components/Home/Home";
import ChatBotMain from "./components/ChatBotMain/ChatBotMain";
import VideoMain from "./components/VideoMain/VideoMain";
import Spendly from "./components/BudgettingTool/BudgettingTool";
function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SamvaadAI" element={<ChatBotMain />} />
        <Route path="/Video" element={<VideoMain />} />
        <Route path="/Spendly" element={<Spendly />} />
      </Routes>
    </Router>
  )
}


export default App


