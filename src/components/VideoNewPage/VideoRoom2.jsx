
import React, { useState, useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer2 } from "./VideoPlayer2";
const APP_ID='ac2703345eeb4ceb9fe4cade2f598cac';
const TOKEN='007eJxTYCgRVmI63aNcImv4qjw76If99tuByioOG64fuSD0u2uSx0kFhsRkI3MDY2MT09TUJJPk1CTLtFST5MSUVKM0U0uL5MRk/13l6Q2BjAyGdWtZGBkgEMTnYgjz93R2VXB29PFhYAAA54wgxw==';
const CHANNEL='VOICE CALL';
const client=AgoraRTC.createClient({
    mode:'rtc',
    codec:'vp8',
})
export const VideoRoom2=()=>{
  const[user,setUser]=useState([]);
  const handleUserJoined=async(user,mediaType)=>{
  await client.subscribe(user,mediaType);
  if(mediaType==='video'){
    setUser((previousUser)=>[...previousUser,user]);
  }
  if(mediaType==='audio'){


  }


  };
  const handleUserLeft=(user)=>{
  setUser((previousUser)=>
previousUser.filter((u)=>u.uid!=user.uid)
);
  };
  useEffect(()=>{
    client.on('user-published',handleUserJoined);
    client.on('user-left',handleUserLeft);
  client.join(APP_ID,CHANNEL,TOKEN,null)
  .then((uid)=>
   Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(),uid])
  ).then(([tracks,uid])=>{
    const[audioTrack,videoTrack]=tracks;
    setUser((previousUsers)=>[
    ...previousUsers,{
    uid,videoTrack,audioTrack
},
]);
    client.publish(tracks);
  })
    },[])
    return(
       <div style={{display:'flex',justifyContent:'center'}}>
        VIDEOROOM
        <div style={{display:'grid',gridTemplateColumns:'repeat(2,200px)'}} >
        {user.map((user)=>(
    <VideoPlayer2 key={user.uid} user={user}/>
   
    ))}
         </div>
       </div>
    )
}
