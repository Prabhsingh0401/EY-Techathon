import ChatBot from "../ChatBot/ChatBot"
import NavBar from "../NavBar/NavBar"

const ChatBotMain = () => {
    return(
        <>
        <NavBar></NavBar>
        <div className="fixed top-[15%] left-9 w-[60vw] z-50 backdrop-blur-sm rounded-lg p-4 h-[83vh] overflow-hidden">         
        <div className="flex">
        <h1 className="font-bold text-7xl bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            SamvaadAI
        </h1>   
                <img className="w-[6vw] rounded-[50%] ml-3" src="/ChatBotImg.gif"></img>
            </div>
            <p className="w-[80%] text-pretty mt-10 text-2xl">A multilingual chatbot that currently supports Hindi with speech-to-text functionality, and it aims to expand its language capabilities in the future. 
                <br></br><br></br>You can ask it for financial knowledge, but since it's powered by AI, it’s important not to rely on it fully for financial decisions.</p>
        </div>
        <ChatBot></ChatBot>
        </>
    )
}

export default ChatBotMain