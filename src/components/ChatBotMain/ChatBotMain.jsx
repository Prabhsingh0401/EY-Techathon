import ChatBot from "../ChatBot/ChatBot"
import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"

const ChatBotMain = () => {
    return(
        <>
        <NavBar></NavBar>
        <div className="fixed top-[10%] lg:top-[15%] left-9 lg:w-[60vw] z-50 backdrop-blur-sm rounded-lg p-4 h-[83vh] overflow-hidden">         
        <div className="flex">
        <h1 className="font-bold text-6xl lg:text-7xl bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
            SamvaadAI
        </h1>   
            <img className="w-[10vw] lg:w-[6vw] rounded-[50%] ml-3" src="/ChatBotImg.gif"></img>
            </div>
            <p className="lg:w-[80%] text-pretty mt-10 text-2xl">A multilingual chatbot that currently supports Hindi with speech-to-text functionality, and it aims to expand its language capabilities in the future. 
                <br></br><br></br>
                One stop to get all your <span className="bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">Financial knowledge.</span></p>
                </div>
        <ChatBot></ChatBot>
        </>
    )
}

export default ChatBotMain