import { Link } from "react-router-dom";
import { Button } from "../FeatureButton/FeatureButton";

export function FeatureCard () {
    return(
        <>
        <div className="w-[95vw] relative bg-grey-100 sm:inline lg:flex justify-center items-center z-[99]">
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl">AI powered Budgetting Tool</h1>
                <Link to='/Spendly'><Button></Button></Link>
            </div>
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl mb-8">Multilingual AI ChatBot</h1>
                <Link to='/SamvaadAI'><Button></Button></Link>
            </div>
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl mb-8">Community Mentorship Support</h1>
                <Link to='/Video'><Button></Button></Link>
            </div>
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl">Multilingual Comprehensive Learning Paths</h1>
                <Link to="/LearningPath"><Button></Button></Link>
            </div>
            <div className="lg:h-[60vh] h-[30vh] w-[85vw] lg:w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8 mt-5">
                <h1 className="font-extrabold w-[80%] lg:text-3xl text-5xl">AI generated Investment Plans</h1>
                <Link to="/InvestiMate"><Button></Button></Link>
            </div>
        </div>
        </>
    )
}