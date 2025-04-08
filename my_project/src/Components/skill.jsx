import React from 'react'

const skill = () => {
  return (
    <div className=' bg-[#0d0d30] mt-25 text-white flex  md:flex overflow-hidden item-center md:flexw-rap md:justify-center bg-blac shadow-xl mx-0 md:mx-20
     bg-opacity-30 rounded-xl p-12  ' >
        <div className='flex flex-col gap-10'>
            <h2 className=' text-2xl flex    md:text-4xl font-bold'> SKILL </h2>
            <div className='flex gap-20 md:flex fex-wrap flex-col md:flex-row items-center'>
                <ul className='flex flex-col gap-5 '>
                    <li className='text-xl'>HTML</li>
                    <li className='text-xl'>CSS</li>
                    <li className='text-xl'>JavaScript</li>
                    <li className='text-xl'>React</li>
                    <li className='text-xl focus-visible:outline-2'>tailwindcss</li>
                </ul>
                <ul className='flex flex-col gap-5'>
                    <li className='text-xl'>SQL</li>
                    <li className='text-xl'>Git</li>
                    <li className='text-xl'>GitHub</li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default skill
