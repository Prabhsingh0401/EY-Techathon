import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import image1 from "../../assets/image.jpg";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Profile() {
  const [joined, setJoined] = useState(false);
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <NavBar />
      <div className="container relative top-[6vw] left-[10vw] w-[90vw] flex h-screen">
        
        {/* Left Section */}
        <div className="left w-[30%] text-white mt-40">
          <img src={image1} alt="" className="w-[200px] h-[200px] rounded-full ml-16" />
          <h1 className="mt-7 ml-12 text-4xl">Monika Hans</h1>
          <p className="ml-7 mt-2">Chairperson of Education Fund at SEBI</p>
        </div>

        {/* Right Section */}
        <div className="right w-[65%] h-[1000px] bg-gray-800 text-white p-10 rounded-lg shadow-lg">
          <h1 className="text-4xl mt-5">About Me</h1>
          <p className="mt-5 text-lg">
          Monika is a renowned personal finance expert currently serving as the chairperson of the Advisory Committee for Investor Protection and Education Fund at SEBI (Securities and Exchange Board of India).<br></br><br></br> With her expertise, she has authored two influential books — ‘Let’s Talk Money’ and ‘Let’s Talk Mutual Funds’ — where she demystifies personal finances using relatable examples.

Moreover, Monika is the founder of ‘Dhan Chakra Financial Education’, a platform aimed at simplifying finance for all, including teachers, through educational content and videos. <br></br><br></br>Her podcast, ‘Let’s Talk Money’, delves into various topics — such as ‘How Can We As Women Secure Our Financial Future?’ and ‘How Can You Get Your Investment Choices Right?’.

In a Femina article, she shared her advice to women, “Make financial independence a priority and set goals for yourself to achieve it.”
          </p>

          {/* Calendar Section */}
          <h2 className="text-2xl mt-10 mb-3">📅 Schedule a Video Call</h2>
          <div className="flex flex-col items-center p-5 rounded-xl w-full md:w-[400px]">
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full p-4 bg-gray-800 text-black rounded-lg "
            />
            <p className="mt-3 text-lg text-gray-300">
              Selected Date: <span className="text-blue-400">{date.toDateString()}</span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex mt-5">
            {!joined && (
              <Link to="/VideoRoom2">
                <button
                  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  onClick={() => setJoined(true)}
                >
                  Get on a Video Call
                </button>
              </Link>
            )}

            <button
              className="ml-5 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={() => setJoined(true)}
            >
              Chat with the Mentors!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
