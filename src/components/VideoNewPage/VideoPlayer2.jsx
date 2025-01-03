import React from "react";
import { useEffect ,useRef} from "react";
export const VideoPlayer2=({user})=>{
    const ref=useRef();
    useEffect(()=>{
    user.videoTrack.play(ref.current)
    },[]);
    return(
        <div>
            Uid:{user.uid}
        <div ref={ref} style={{width:'1000px',height:'700px' }}></div>
        </div>
    )
}