import {Gallery} from '../Image-Gallery/Gallery';

export function HeroSection () {
    return (
        <>
        <div className="flex items-center justify-center w-screen h-[100vh] ">
        <Gallery></Gallery>
        <div className='mt-10'>
        <img src='/IconBig.png' className=''></img>
        <div id="google_translate_element" style={{ position: "relative", width: "100%", height: "100%", zIndex: 1000 ,marginLeft:"30%"}}></div>
        <br></br>
        </div>
        </div>
        </>
    )
}

