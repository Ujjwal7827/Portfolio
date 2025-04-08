import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Skill from './Components/skill'
const App = () => {
  return (
    <div className='bg-[#171d32] h-auto w-full overflow-hidden ' >
    <Navbar/>

    <Home/>
    <About />
    <Skill />
     

    </div>
     
    
  )
}

export default App
