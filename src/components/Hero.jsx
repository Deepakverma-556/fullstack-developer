"use client"
import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);

  useEffect(() => {
    if (count < 5) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 500);
    }
    if (increment < 13) {
      const timer = setTimeout(() => {
        setIncrement(increment + 1);
      }, 500);
    }
  },);
  return (
    <div className='pt-48 pb-56 max-lg:py-40 max-md:py-24 max-sm:py-10'>
      <div className='max-w-xxl mx-auto px-4 font-roboto'>
        <div className='flex flex-wrap -mx-3 items-center'>
          <div className='w-full sm:w-7/12 px-3'>
            <div>
              <p className='font-bold text-md text-light max-lg:text-4xl max-md:text-3xl max-sm:text-2xl'>Hello, i am</p>
              <h2 className='typewriter font-bold text-large max-lg:text-7xl max-md:text-6xl max-sm:text-xxl text-green sm:max-w-72 leading-xxl pt-6 pb-16 max-md:pt-5 max-md:pb-10 max-sm:pt-2 max-sm:pb-5'>＜ John Doe /＞</h2>
              <p className='font-bold text-xxxxl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl text-light pb-10 max-md:pb-7 max-sm:pb-4'>Fullstack Developer</p>
              <div className='flex items-center justify-between max-lg:flex-wrap'>
                <div className='flex items-center gap-1 max-lg:gap-3'>
                  <p className='font-bold text-extralarge max-lg:text-7xl max-md:text-6xl max-sm:text-5xl text-medium-gray'>{count}</p>
                  <p className='font-bold text-xsm max-lg:text-2xl max-md:text-xl max-sm:text-base leading-xl text-dark-gray'>YEARS OF EXPERIENCE</p>
                </div>
                <div className='flex items-center gap-1 max-lg:gap-3'>
                  <p className='font-bold text-extralarge max-lg:text-7xl max-md:text-6xl max-sm:text-5xl text-medium-gray'>{increment}</p>
                  <p className='font-bold text-xsm max-lg:text-2xl max-md:text-xl max-sm:text-base leading-xl text-dark-gray'>PROJECTS COMPLETED AROUND THE WORLD</p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full sm:w-5/12 px-3 max-sm:pt-6'>
            <div>
              <img src="/assets/images/hero-img.webp" alt="hero-img" className='w-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero