import React from "react";
import NavBar from "../NavBar/NavBar";
import image1 from '../../assets/image.jpg';
import { VideoRoom } from "../Video/VideoRoom";
import { useState } from "react";
import { Link } from "react-router-dom";
function Profile () {
    const [joined, setJoined] = useState(false);
  return (
    <div>

      <NavBar />
      <div className="container relative top-[6vw] left-[10vw] w-[90vw] flex h-screen">
        
        <div className="left w-[30%] text-white mt-40">
          <img src={image1} alt="" className="w-[200px] h-[200px] rounded-full ml-16" />
          <h1 className="mt-7 ml-12 text-4xl">Monika Hans</h1>
          <p className="ml-7 mt-2">Chairperson of Education Fund at SEBI</p>
        </div>

        {/* Right Section */}
        <div className="right w-[65%] bg-gray-700 text-white">
        <h1 className="text-4xl mt-24 ml-10">About Me</h1>
        <p className="ml-10 mt-5 text-[19px]">Monika is a renowned personal finance expert currently serving as the chairperson of the Advisory Committee for Investor Protection and Education Fund at SEBI (Securities and Exchange Board of India).<br></br><br></br> With her expertise, she has authored two influential books — ‘Let’s Talk Money’ and ‘Let’s Talk Mutual Funds’ — where she demystifies personal finances using relatable examples.

Moreover, Monika is the founder of ‘Dhan Chakra Financial Education’, a platform aimed at simplifying finance for all, including teachers, through educational content and videos. <br></br><br></br>Her podcast, ‘Let’s Talk Money’, delves into various topics — such as ‘How Can We As Women Secure Our Financial Future?’ and ‘How Can You Get Your Investment Choices Right?’.

In a Femina article, she shared her advice to women, “Make financial independence a priority and set goals for yourself to achieve it.”</p>
{!joined && (
    <Link to='/VideoRoom2'>
        <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-10 ml-12"
          onClick={() => setJoined(true)}
        >
          Get on a Video Call
        </button>
        </Link>
      )}
     
        </div>
      </div>
    </div>
  );
};

export default Profile;
