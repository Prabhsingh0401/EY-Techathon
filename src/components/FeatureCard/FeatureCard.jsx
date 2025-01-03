import { Link } from "react-router-dom";
import { Button } from "../FeatureButton/FeatureButton";

export function FeatureCard () {
    return(
        <>
        <div className="w-[95vw] absolute bg-grey-100 flex justify-center items-center z-[99]">
            <div className="h-[60vh] w-[20vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8">
                <h1 className="font-extrabold w-[80%] text-3xl mb-9">AI powered Budgetting Tool</h1>
                <Link to='/Spendly'><Button></Button></Link>
            </div>
            <div className="h-[60vh] w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8">
                <h1 className="font-extrabold w-[80%] text-3xl mb-[5vw]">Multilingual AI ChatBot</h1>
                <Link to='/SamvaadAI'><Button></Button></Link>
            </div>
            <div className="h-[60vh] w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8">
                <h1 className="font-extrabold w-[80%] text-3xl mb-8">Community Mentorship Support</h1>
                <Link to='/Video'><Button></Button></Link>
            </div>
            <div className="h-[60vh] w-[20vw] ml-2 backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-8">
                <h1 className="font-extrabold w-[80%] text-3xl">Multilingual Comprehensive Learning Paths</h1>
                <Link to="/LearningPath"><Button></Button></Link>
            </div>
        </div>
        </>
    )
}