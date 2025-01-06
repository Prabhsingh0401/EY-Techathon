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
        <div ref={ref} style={{width:'600px',height:'600px' }}></div>
        </div>
    )
}