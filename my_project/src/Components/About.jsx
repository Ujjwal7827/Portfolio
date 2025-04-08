import React from 'react'
import Avtarimg from "../assets/avtar.png"
import { FaArrowRight } from "react-icons/fa";
const About = () => {
  return (
    <div className=' bg-[#0d0d30] mt-25 text-white flex  md:flex overflow-hidden item-center md:flexw-rap md:justify-center bg-blac shadow-xl mx-0 md:mx-20
     bg-opacity-30 rounded-xl p-12  ' >
        <div>
            <h2 className=' text-2xl flex    md:text-4xl font-bold'> ABOUT </h2>
            <div className=' flex gap-20 md:flex fex-wrap flex-col md:flex-row items-center'>
                <img className='h-20  mt-20 object-bottom  md:h-80 ' src={Avtarimg} alt="aboutimg" />
                
                <ul>
                  <div className='flex gap-5 py-4 '><FaArrowRight /> 
                    <span className='w-96'>
                       <h1  className=' border-b-2  pb-2 inline-block text-2xl md:text-2xl fontsemibold leading-normal'> Higher-Education</h1>
                       <p className='text-sm mt-3 md:text-md leading-tight'> I'm done my 10th with Haryana board and</p>
                       <p >  12th with uttarpradesh board </p>
                    </span>
                    </div>

                    <div className='flex gap-5 py-4 '><FaArrowRight /> 
                    <span className='w-96 '>
                       <h1  className='border-b-2 pb-2 inline-block  text-xl md:text-2xl fontsemibold leading-normal'>Bacholer's</h1>
                       <p className='text-sm mt-3 md:text-md leading-tight'> I'm done my BCA(bacholer of computer application) with aggarawal collage ballabhgrah</p>
                    </span>
                    </div>

                    <div className='flex gap-5 '><FaArrowRight /> 
                    <span className='w-96 '>
                       <h1  className='border-b-2 pb-2 inline-block text-xl md:text-2xl  fontsemibold leading-normal'>Developer-journey</h1>
                       <p className='text-sm mt-3  md:text-md leading-tight'> in the starting this jurney im suffering with lot of problem ,
                        like how to learn all of these things. <br /> after that I'm growing my skill step by step and make it easy after time to time now it is very intreting for me   </p>
                    </span>
                    </div>
                </ul>

               

            </div>
        </div>
      
      

    </div>
  )
}

export default About
