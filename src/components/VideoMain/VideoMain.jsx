import { useState } from 'react';
import { VideoRoom } from '../Video/VideoRoom';
import image1 from '../../assets/image.jpg';
import image2 from '../../assets/prithi.jpg';
import image3 from '../../assets/rachana.jpg';
import image4 from '../../assets/nisary.jpg';
import image5 from '../../assets/Ratnasri.png';
import image6 from '../../assets/Hena.jpg';
import image7 from '../../assets/Nipa.jpg';
import image8 from '../../assets/priyasharma.jpg';
import NavBar from '../NavBar/NavBar';
import {Link } from 'react-router-dom';
function VideoMain() {


  return (
    
    <div className="app w-[95vw] absolute bg-grey-100 z-[99] text-white p-5">
        <NavBar/>
        <h1 className="text-5xl mb-8 ml-9 mt-20 bg-gradient-to-br from-green-400 to-blue-600 text-transparent bg-clip-text font-extrabold tracking-wide drop-shadow-lg">
  Community Room
</h1>


   
      <div className="card-container  grid grid-cols-4 gap-6 ml-10">
        <div className="card h-[65vh] w-[21vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-12">
        <div className='h-[230px] w-[300px] rounded-xl'>

           <img src={image1} className='rounded-xl'/>
           </div>
          <h1 className="text-xl font-bold mt-4">Monika Hans</h1>
          <p>Chairperson of Education Fund at SEBI</p>
    
            <Link to='/Profile'>
        <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-6"
        >
         Know More about Her
        </button>
        </Link>

        </div>
        <div className="card1 h-[65vh] w-[21vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-12">
          <img src={image2} alt="" className='h-[230px] w-[300px] rounded-lg' />
          <h1 className="text-xl font-bold mt-4">Prithi Rathi Gupta</h1>
          <p>Managing director of Anand Rathi Share</p>
          <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-6"
        >
          Know More about Her 
        </button>
        </div>
        <div className="card2 h-[65vh] w-[21vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-12">
        <img src={image3} alt="" className='h-[230px] w-[300px] rounded-lg' />
          <h1 className="text-xl font-bold mt-4">Rachana Phadke Ranade</h1>
          <p>Chartered Accountant</p>
          <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  mt-12"
        >
          Know More about Her
        </button>
        </div>
        <div className="card3 h-[65vh] w-[21vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-12">
        <img src={image4} alt="" className='h-[230px] w-[300px] rounded-lg' />
          <h1 className="text-xl font-bold mt-4 ">Nisary Mahesh</h1>
          <p>Founder, Her Money Talks</p>
          <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2  mt-12"
        >
           Know More about Her
        </button>
        </div>
        <div className="card4 h-[65vh] w-[21vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-12">
          <img src={image5} alt="" className='h-[230px] w-[300px] rounded-lg object-cover' />
          <h1 className="text-xl font-bold mt-4">Ratnasari Karra</h1>
          <p>Investment Advisor</p>
          <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-9"
        >
           Know More about Her
        </button>
        </div>
        <div className="card4 h-[65vh] w-[21vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-12">
          <img src={image6} alt="" className='h-[230px] w-[300px] rounded-lg object-cover' />
          <h1 className="text-xl font-bold mt-4">Hena Mehta</h1>
          <p>Founder & CEO of Basis</p>
          <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-9"
        >
         Know More about Her
        </button>
        </div>
        <div className="card4 h-[65vh] w-[21vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-12">
          <img src={image7} alt="" className='h-[230px] w-[300px] rounded-lg object-cover' />
          <h1 className="text-xl font-bold mt-4">Nipa Sheth</h1>
          <p>Founder, Trust Capital</p>
          <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-9"
        >
         Know More about Her
        </button>
        </div>
        <div className="card4 h-[65vh] w-[21vw] backdrop-blur-sm bg-zinc-800/50 rounded-[30px] p-12">
          <img src={image8} alt="" className='h-[230px] w-[300px] rounded-lg object-cover' />
          <h1 className="text-xl font-bold mt-4">Priya Sharma</h1>
          <p>CoFounder, Zest Money</p>
          <button
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-9"
        >
        Know more about Her
        </button>
        </div>
        
      </div>
    
    </div>
  );
}

export default VideoMain;
