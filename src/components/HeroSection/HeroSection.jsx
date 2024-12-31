import {Gallery} from '../Image-Gallery/Gallery';

export function HeroSection () {
    return (
        <>
        <div className="flex items-center justify-center w-screen h-[100vh] ">
        <Gallery></Gallery>
        <div className='mt-10'>
        <img src='/IconBig.png' className=''></img>
        <br></br>
        </div>
        </div>
        </>
    )
}

