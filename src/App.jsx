import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./components/Home/Home";
import ChatBotMain from "./components/ChatBotMain/ChatBotMain";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChatBot" element={<ChatBotMain />} />
      </Routes>
    </Router>
  )
}

export default App
