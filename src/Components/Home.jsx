import React from 'react';
import Avtar from '../assets/Ai Generate Picture.jpg'
import { RiGithubFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import TextEffect from "./Textchange"





const Home = () => {
  return (
    <div id="Home" className=' bg-[#0d0d30] text-white flex w-full justify-between item-start h-screen mt-5 p-10 md:p-20'>
        <div className='  md:w-6/12 md:pt-10 selection:bg-fuchsia-700 selection:text-fuchsia-900 '>
        <h1 className=' ml-20 text-3xl md:text-6xl mt-5 font-bold flex leading-normal tracking-tight  'data-aos="fade-right" data-aos-duration="2000">
        
        <TextEffect/>
         </h1>
        
        <p className='ml-20 mt-5 text-sm md:text-2xl tracking-tight ' data-aos="fade-right" data-aos-duration="2000"> welcome to my personal portfolio  </p>

       <button id='contact-bt' className='  ml-20   mt-10 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover :opacity-85
         font-semibold hover:scale-105  rounded-3xl bg-linear-to-t from-sky-500 to-indigo-500' data-aos="fade-right" data-aos-duration="2000"> Contact me </button>

      <div className='ml-20 absolute mt-20 h-10 w-40 flex gap-5 justify-center items-center text-2xl md:text-3xl'>
        <i >
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <RiGithubFill className="text-white rounded-2xl border-2  hover:text-black hover:bg-white  " 
        data-aos="zoom-in" 
          data-aos-duration="2000"/>
           
          </a>
          </i>

         <i>
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer">
           <FaLinkedin className='text-white rounded-2xl  border-2  hover:text-black  hover:bg-white hover:rounded-2xl  transition-colors duration-600' data-aos="zoom-in" 
          data-aos-duration="2000" />
           </a>
         </i>
           

           <i>
           <a href="https://www.instagram.com/its_ujju7827/">
            <FaSquareInstagram className='text-white rounded-full  border-2 hover:text-black hover:bg-white hover:rounded-2xl transition-colors duration-600' data-aos="zoom-in" 
          data-aos-duration="2000"/>
           </a>
           </i>


           <i>
           <FaSquareXTwitter className='text-white rounded-full  border-2 hover:text-black hover:bg-white hover:rounded-2xl transition-colors duration-600'data-aos="zoom-in" 
          data-aos-duration="2000" />
          </i>
         
       
      </div>
        
        </div>
        
        
        
      <div className='mt-35 mr-4 md:mr-20 rounded-full w-48 h-48 md:w-80 md:h-82 p-1 sm:rounded-full sm:h-screen bg-gradient-to-r from-purple-500 via-blue-400
       via-blue-800 to-pink-500 animate-gradient-border relative'
       data-aos="fade-left" data-aos-duration="2000">

        <img className='rounded-full  w-full h-full object-cover' src={Avtar} alt=""/>
        
      </div>
      
         </div>
         
  )
}

export default Home