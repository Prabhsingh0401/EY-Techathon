import { useState } from 'react'
import { VideoRoom } from '../Video/VideoRoom';
function VideoMain() {
  const[joined,setJoined]=useState(false);
  return (
   <div className='app'>
    <h1 className='text-4xl '>Community Room </h1>
    <div className="card-container flex space-x-4">
        <div className='card bg-green-900 text-white p-7 rounded-lg mt-7 h-64'>
            <h1>Eshaa Bhasin</h1>
            <p>She is an enterpreneur</p>
        </div>
        <div className='card1  bg-green-900 text-white p-7 rounded-lg mt-7 h-64'>
            <h1>Eshaa Bhasin</h1>
            <p>She is an enterpreneur</p>
        </div>
        <div className='card2 bg-green-900 text-white p-7 rounded-lg mt-7 h-64'>
            <h1>Eshaa Bhasin</h1>
            <p>She is an enterpreneur</p>
        </div>
    </div>
   <h1>Video Conferencing</h1>
   {!joined &&(
  <button onClick={()=>setJoined(true)}>Join Room</button>
   )}
   {joined && <VideoRoom/>}
 
    </div>
  );
}


export default VideoMain;
