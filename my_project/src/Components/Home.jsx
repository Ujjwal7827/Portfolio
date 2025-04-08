import React from 'react'
import Avtar from '../assets/Ai Generate Picture.jpg'
import { IoCall } from "react-icons/io5"; 

const Home = () => {
  return (
    <div className=' bg-[#0d0d30] text-white flex w-full justify-between item-start p-10 md:p-20'>
        <div className='  md:w-6/12 md:pt-10 selection:bg-fuchsia-700 selection:text-fuchsia-900 '>
        <h1 className=' ml-20 text-3xl md:text-6xl font-bold flex leading-normal tracking-tight  '>Hello' I am Ujjwal </h1>
        <p className='ml-20 mt-5 text-sm md:text-2xl tracking-tight '> welcome to my personal portfolio  </p> 
        
      <a  className=' invisible ' alt="call"><IoCall /> </a>

       <button className=' ml-20 hover:{a} mt-10 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover :opacity-85
        duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'> contact me </button>
        </div>
      <div className='ml-50 w-3/8'> <img className='rounded-3xl cover' src={Avtar} alt="" /> </div>
    </div>
  )
}

export default Home
