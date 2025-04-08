import React, { useState } from 'react'


const Navbar = () => {
    const[menu,openmenu ] = useState(false);
    const[showmenu, setmenu] = useState(true);

  return (
    
    <>
      <nav id='navbar' className="  bg-[#0d0d30]     sticky top-0 flex flex-wrap justify-between   md:items-center text-[#8b9eb2]  px-10  pt-6 md:px-20">
          <span className='text-3xl  text-white tracking-wide'>PORTFOLIO</span>

          <ul className= {`${menu ? "block":"hidden"}
          mx-24 p-y2 mt-4 font-semibold md:mt-5 bg-black  px-2 rounded-xl bg-opacity-30 md:border-none text-center
           md:bg-transparent md:static md:mx-0 md:flex gap-10`}>
            <a href="#Home">
          
            <li className='text-md focus:border-blue-400  hover:text-white hover:scale-105  transition-all duration-300 text-xl p-1 md:p-0'> Home</li>
            </a>

            <a href="#About">
            <li className=' text-md hover:text-white hover:scale-105 transition-all duration-300 text-xl p-1 md:p-0'> About </li>
            </a>

            <a href="Skill">
            <li  className='text-md hover:text-white hover:scale-105 transition-all duration-300 text-xl p-1 md:p-0'>Skill</li>
            </a>

            <a href="Project">
            <li  className='text-md hover:text-white hover:scale-105 transition-all duration-300 text-xl p-1 md:p-0'>Project</li>
            </a>
            
          </ul>
          
      </nav>
    </>
  )
}
export default Navbar
