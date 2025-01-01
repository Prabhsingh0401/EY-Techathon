import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./components/Home/Home";
import ChatBot from "./components/ChatBot/ChatBot";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ChatBot" element={<ChatBot />} />
      </Routes>
    </Router>
  )
}

export default App
