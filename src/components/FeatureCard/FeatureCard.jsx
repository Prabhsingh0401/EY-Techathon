import { Link } from "react-router-dom";
import { Button } from "../FeatureButton/FeatureButton";

export function FeatureCard () {
    return(
        <>
        <div className="w-[95vw] relative bg-grey-100 sm:inline lg:flex justify-center items-center z-[99]">
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl">Spendly</h1>
                <h1 className="font-extrabold w-[80%] lg:text-md text-xl mt-5 mb-8">AI powered Budgetting Tool</h1>
                <Link to='/Spendly'><Button></Button></Link>
            </div>
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl">SamvaadAI</h1>
                <h1 className="font-extrabold w-[80%] lg:text-md text-xl mt-5 mb-8">Multilingual AI ChatBot</h1>
                <Link to='/SamvaadAI'><Button></Button></Link>
            </div>
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl">Community Room</h1>
                <h1 className="font-extrabold w-[80%] lg:text-md text-xl mt-5">Community and Mentorship</h1>
                <Link to='/Video'><Button></Button></Link>
            </div>
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl">Learning Paths</h1>
                <h1 className="font-extrabold w-[80%] lg:text-md text-xl mt-5">AI personalised Paths</h1>
                <Link to="/Paths"><Button></Button></Link>
            </div>
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl">Investimate</h1>
                <h1 className="font-extrabold w-[80%] lg:text-md text-xl mt-5 mb-8">AI Investment Planner</h1>
                <Link to="/InvestiMate"><Button></Button></Link>
            </div>
        </div>
        </>
    )
}