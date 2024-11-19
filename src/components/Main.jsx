import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import AboutMe from './AboutMe'

const Main = () => {
  return (
      <div className='bg-gradient-to-br from-black via-[#272727] to-[#494949] '>
          <Navbar />
          <Hero />
          <AboutMe/>
    </div>
  )
}

export default Main