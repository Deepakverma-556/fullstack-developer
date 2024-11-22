"use client";
import React, { useState, useEffect } from 'react'

const Navbar = () => {

  const [open, setOpen] = useState();
  useEffect(() => {
    const handleOverflow = () => {
      if (open && window.innerWidth < 1025) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };
    handleOverflow();
    window.addEventListener("resize", handleOverflow);
    return () => {
      window.removeEventListener("resize", handleOverflow);
    };
  }, [open]);
  return (
    <div>
      <div className='max-w-xxl px-4 mx-auto font-roboto'>
        <div className='flex items-center justify-between py-6 max-lg:py-5 max-md:py-4'>
          <a href="#" className='font-bold text-xxl font-roboto text-green max-sm:text-3xl'>JOHN<span className='text-white'>DOE</span></a>
          <ul className='flex items-center gap-6 max-lg:hidden'>
            <li><a href="#about" className='font-medium font-roboto text-xsm text-white transition-all duration-300 hover:text-green max-[1200px]:text-xl'>About</a></li>
            <li><a href="#skills" className='font-medium font-roboto text-xsm text-white transition-all duration-300 hover:text-green max-[1200px]:text-xl'>Skills</a></li>
            <li><a href="#projects" className='font-medium font-roboto text-xsm text-white transition-all duration-300 hover:text-green max-[1200px]:text-xl'>Projects</a></li>
          </ul>
          <ul className='flex items-center gap-6 max-lg:hidden'>
            <li>
              <a href="https://in.linkedin.com/" target='blank' className='flex items-center gap-1 font-medium font-roboto text-xsm text-white transition-all duration-300 hover:text-green group/link max-[1200px]:text-xl'>
                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='transition-all duration-300 group-hover/link:fill-green' d="M22.9167 0.25C23.6681 0.25 24.3888 0.548511 24.9201 1.07986C25.4515 1.61122 25.75 2.33189 25.75 3.08333V22.9167C25.75 23.6681 25.4515 24.3888 24.9201 24.9201C24.3888 25.4515 23.6681 25.75 22.9167 25.75H3.08333C2.33189 25.75 1.61122 25.4515 1.07986 24.9201C0.548511 24.3888 0.25 23.6681 0.25 22.9167V3.08333C0.25 2.33189 0.548511 1.61122 1.07986 1.07986C1.61122 0.548511 2.33189 0.25 3.08333 0.25H22.9167ZM22.2083 22.2083V14.7C22.2083 13.4751 21.7218 12.3005 20.8557 11.4343C19.9895 10.5682 18.8149 10.0817 17.59 10.0817C16.3858 10.0817 14.9833 10.8183 14.3033 11.9233V10.3508H10.3508V22.2083H14.3033V15.2242C14.3033 14.1333 15.1817 13.2408 16.2725 13.2408C16.7985 13.2408 17.303 13.4498 17.6749 13.8217C18.0469 14.1937 18.2558 14.6982 18.2558 15.2242V22.2083H22.2083ZM5.74667 8.12667C6.37788 8.12667 6.98324 7.87592 7.42958 7.42958C7.87592 6.98324 8.12667 6.37788 8.12667 5.74667C8.12667 4.42917 7.06417 3.3525 5.74667 3.3525C5.11169 3.3525 4.50273 3.60474 4.05374 4.05374C3.60474 4.50273 3.3525 5.11169 3.3525 5.74667C3.3525 7.06417 4.42917 8.12667 5.74667 8.12667ZM7.71583 22.2083V10.3508H3.79167V22.2083H7.71583Z" fill="white" />
                </svg> Linkedin
              </a>
            </li>
            <li>
              <a href="https://github.com" target='blank' className='flex items-center gap-1 font-medium font-roboto text-xsm text-white transition-all duration-300 hover:text-green group/link max-[1200px]:text-xl'>
                <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className='transition-all duration-300 group-hover/link:fill-green' d="M15 0.833344C13.1396 0.833344 11.2974 1.19978 9.57866 1.91172C7.85988 2.62366 6.29816 3.66717 4.98266 4.98266C2.3259 7.63943 0.833344 11.2428 0.833344 15C0.833344 21.2617 4.89918 26.5742 10.5233 28.4583C11.2317 28.5717 11.4583 28.1325 11.4583 27.75C11.4583 27.4242 11.4583 26.5317 11.4583 25.3558C7.53418 26.2058 6.69834 23.4575 6.69834 23.4575C6.04668 21.8142 5.12584 21.375 5.12584 21.375C3.83668 20.4967 5.22501 20.525 5.22501 20.525C6.64168 20.6242 7.39251 21.9842 7.39251 21.9842C8.62501 24.1375 10.7075 23.5 11.515 23.16C11.6425 22.2392 12.0108 21.6158 12.4075 21.2617C9.26251 20.9075 5.96168 19.6892 5.96168 14.2917C5.96168 12.7192 6.50001 11.4583 7.42084 10.4525C7.27918 10.0983 6.78334 8.62501 7.56251 6.71251C7.56251 6.71251 8.75251 6.33001 11.4583 8.15751C12.5775 7.84584 13.7958 7.69001 15 7.69001C16.2042 7.69001 17.4225 7.84584 18.5417 8.15751C21.2475 6.33001 22.4375 6.71251 22.4375 6.71251C23.2167 8.62501 22.7208 10.0983 22.5792 10.4525C23.5 11.4583 24.0383 12.7192 24.0383 14.2917C24.0383 19.7033 20.7233 20.8933 17.5642 21.2475C18.0742 21.6867 18.5417 22.5508 18.5417 23.8683C18.5417 25.7667 18.5417 27.2967 18.5417 27.75C18.5417 28.1325 18.7683 28.5858 19.4908 28.4583C25.115 26.56 29.1667 21.2617 29.1667 15C29.1667 13.1396 28.8003 11.2974 28.0883 9.57866C27.3764 7.85988 26.3329 6.29816 25.0174 4.98266C23.7019 3.66717 22.1401 2.62366 20.4214 1.91172C18.7026 1.19978 16.8604 0.833344 15 0.833344Z" fill="white" />
                </svg>
                Github
              </a>
            </li>
            <li>
              <button className="bg-gradient-to-b from-green to-white rounded-xl p-1 overflow-hidden relative group"><a href="mailto:">
                <span className="flex gap-1 items-center w-full bg-[#2c2c2c] text-white py-2 px-4 rounded-xl font-medium font-roboto text-xsm max-[1200px]:text-xl">
                  <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33 0.25H13.5C11.85 0.25 10.5 1.6 10.5 3.25V16.75C10.5 18.415 11.85 19.75 13.5 19.75H33C34.665 19.75 36 18.415 36 16.75V3.25C36 1.6 34.665 0.25 33 0.25ZM33 16.75H13.5V5.755L23.25 10.75L33 5.755V16.75ZM23.25 8.215L13.5 3.25H33L23.25 8.215ZM7.5 16.75C7.5 17.005 7.545 17.245 7.575 17.5H1.5C0.672 17.5 0 16.825 0 16C0 15.175 0.672 14.5 1.5 14.5H7.5V16.75ZM4.5 2.5H7.575C7.545 2.755 7.5 2.995 7.5 3.25V5.5H4.5C3.675 5.5 3 4.825 3 4C3 3.175 3.675 2.5 4.5 2.5ZM1.5 10C1.5 9.175 2.175 8.5 3 8.5H7.5V11.5H3C2.175 11.5 1.5 10.825 1.5 10Z" fill="white" />
                  </svg> Contact Me
                </span>
              </a>
                <a href="mailto:">
                  <span className="flex gap-1 items-center w-full bg-gradient-to-b from-green to-white text-black py-2 px-4 rounded-lg font-bold font-roboto text-xsm max-[1200px]:text-xl absolute -top-full transition-all duration-500 group-hover:top-1">
                    <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33 0.25H13.5C11.85 0.25 10.5 1.6 10.5 3.25V16.75C10.5 18.415 11.85 19.75 13.5 19.75H33C34.665 19.75 36 18.415 36 16.75V3.25C36 1.6 34.665 0.25 33 0.25ZM33 16.75H13.5V5.755L23.25 10.75L33 5.755V16.75ZM23.25 8.215L13.5 3.25H33L23.25 8.215ZM7.5 16.75C7.5 17.005 7.545 17.245 7.575 17.5H1.5C0.672 17.5 0 16.825 0 16C0 15.175 0.672 14.5 1.5 14.5H7.5V16.75ZM4.5 2.5H7.575C7.545 2.755 7.5 2.995 7.5 3.25V5.5H4.5C3.675 5.5 3 4.825 3 4C3 3.175 3.675 2.5 4.5 2.5ZM1.5 10C1.5 9.175 2.175 8.5 3 8.5H7.5V11.5H3C2.175 11.5 1.5 10.825 1.5 10Z" fill="black" />
                    </svg> Contact Me
                  </span>
                </a>
              </button>
            </li>
          </ul>
          <div
            className={`lg:hidden z-30 text-4xl max-sm:text-3xl font-bold cursor-pointer text-green ${open ? "fixed right-5" : ""}`}
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </div>
          <div
            className={`w-full bg-black h-full transition-all duration-500 left-0 lg:-top-full z-20 fixed flex justify-center items-center ${open ? "top-0 left-0" : "-top-full"
              }`}
          >
            <ul className='flex flex-col items-center gap-6 md:gap-8'>
              <li><a href="#about" onClick={() => setOpen(false)} className='font-medium font-roboto text-xsm text-white transition-all duration-300 hover:text-green max-[1200px]:text-xl'>About</a></li>
              <li><a href="#skills" onClick={() => setOpen(false)} className='font-medium font-roboto text-xsm text-white transition-all duration-300 hover:text-green max-[1200px]:text-xl'>Skills</a></li>
              <li><a href="#projects" onClick={() => setOpen(false)} className='font-medium font-roboto text-xsm text-white transition-all duration-300 hover:text-green max-[1200px]:text-xl'>Projects</a></li>
              <li>
                <a onClick={() => setOpen(false)} href="https://in.linkedin.com/" target='blank' className='flex items-center gap-1 font-bold font-roboto text-xsm text-white transition-all duration-300 hover:text-green group/link max-[1200px]:text-xl'>
                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='transition-all duration-300 group-hover/link:fill-green' d="M22.9167 0.25C23.6681 0.25 24.3888 0.548511 24.9201 1.07986C25.4515 1.61122 25.75 2.33189 25.75 3.08333V22.9167C25.75 23.6681 25.4515 24.3888 24.9201 24.9201C24.3888 25.4515 23.6681 25.75 22.9167 25.75H3.08333C2.33189 25.75 1.61122 25.4515 1.07986 24.9201C0.548511 24.3888 0.25 23.6681 0.25 22.9167V3.08333C0.25 2.33189 0.548511 1.61122 1.07986 1.07986C1.61122 0.548511 2.33189 0.25 3.08333 0.25H22.9167ZM22.2083 22.2083V14.7C22.2083 13.4751 21.7218 12.3005 20.8557 11.4343C19.9895 10.5682 18.8149 10.0817 17.59 10.0817C16.3858 10.0817 14.9833 10.8183 14.3033 11.9233V10.3508H10.3508V22.2083H14.3033V15.2242C14.3033 14.1333 15.1817 13.2408 16.2725 13.2408C16.7985 13.2408 17.303 13.4498 17.6749 13.8217C18.0469 14.1937 18.2558 14.6982 18.2558 15.2242V22.2083H22.2083ZM5.74667 8.12667C6.37788 8.12667 6.98324 7.87592 7.42958 7.42958C7.87592 6.98324 8.12667 6.37788 8.12667 5.74667C8.12667 4.42917 7.06417 3.3525 5.74667 3.3525C5.11169 3.3525 4.50273 3.60474 4.05374 4.05374C3.60474 4.50273 3.3525 5.11169 3.3525 5.74667C3.3525 7.06417 4.42917 8.12667 5.74667 8.12667ZM7.71583 22.2083V10.3508H3.79167V22.2083H7.71583Z" fill="white" />
                  </svg> Linkedin
                </a>
              </li>
              <li>
                <a onClick={() => setOpen(false)} href="https://github.com" target='blank' className='flex items-center gap-1 font-bold font-roboto text-xsm text-white transition-all duration-300 hover:text-green group/link max-[1200px]:text-xl'>
                  <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className='transition-all duration-300 group-hover/link:fill-green' d="M15 0.833344C13.1396 0.833344 11.2974 1.19978 9.57866 1.91172C7.85988 2.62366 6.29816 3.66717 4.98266 4.98266C2.3259 7.63943 0.833344 11.2428 0.833344 15C0.833344 21.2617 4.89918 26.5742 10.5233 28.4583C11.2317 28.5717 11.4583 28.1325 11.4583 27.75C11.4583 27.4242 11.4583 26.5317 11.4583 25.3558C7.53418 26.2058 6.69834 23.4575 6.69834 23.4575C6.04668 21.8142 5.12584 21.375 5.12584 21.375C3.83668 20.4967 5.22501 20.525 5.22501 20.525C6.64168 20.6242 7.39251 21.9842 7.39251 21.9842C8.62501 24.1375 10.7075 23.5 11.515 23.16C11.6425 22.2392 12.0108 21.6158 12.4075 21.2617C9.26251 20.9075 5.96168 19.6892 5.96168 14.2917C5.96168 12.7192 6.50001 11.4583 7.42084 10.4525C7.27918 10.0983 6.78334 8.62501 7.56251 6.71251C7.56251 6.71251 8.75251 6.33001 11.4583 8.15751C12.5775 7.84584 13.7958 7.69001 15 7.69001C16.2042 7.69001 17.4225 7.84584 18.5417 8.15751C21.2475 6.33001 22.4375 6.71251 22.4375 6.71251C23.2167 8.62501 22.7208 10.0983 22.5792 10.4525C23.5 11.4583 24.0383 12.7192 24.0383 14.2917C24.0383 19.7033 20.7233 20.8933 17.5642 21.2475C18.0742 21.6867 18.5417 22.5508 18.5417 23.8683C18.5417 25.7667 18.5417 27.2967 18.5417 27.75C18.5417 28.1325 18.7683 28.5858 19.4908 28.4583C25.115 26.56 29.1667 21.2617 29.1667 15C29.1667 13.1396 28.8003 11.2974 28.0883 9.57866C27.3764 7.85988 26.3329 6.29816 25.0174 4.98266C23.7019 3.66717 22.1401 2.62366 20.4214 1.91172C18.7026 1.19978 16.8604 0.833344 15 0.833344Z" fill="white" />
                  </svg>
                  Github
                </a>
              </li>
              <li>
                <button onClick={() => setOpen(false)} className="bg-gradient-to-b from-green to-white rounded-xl p-1">
                  <span className="flex gap-1 items-center w-full bg-black text-white py-2 px-4 rounded-xl font-bold font-roboto text-xsm max-[1200px]:text-xl">
                    <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M33 0.25H13.5C11.85 0.25 10.5 1.6 10.5 3.25V16.75C10.5 18.415 11.85 19.75 13.5 19.75H33C34.665 19.75 36 18.415 36 16.75V3.25C36 1.6 34.665 0.25 33 0.25ZM33 16.75H13.5V5.755L23.25 10.75L33 5.755V16.75ZM23.25 8.215L13.5 3.25H33L23.25 8.215ZM7.5 16.75C7.5 17.005 7.545 17.245 7.575 17.5H1.5C0.672 17.5 0 16.825 0 16C0 15.175 0.672 14.5 1.5 14.5H7.5V16.75ZM4.5 2.5H7.575C7.545 2.755 7.5 2.995 7.5 3.25V5.5H4.5C3.675 5.5 3 4.825 3 4C3 3.175 3.675 2.5 4.5 2.5ZM1.5 10C1.5 9.175 2.175 8.5 3 8.5H7.5V11.5H3C2.175 11.5 1.5 10.825 1.5 10Z" fill="white" />
                    </svg> Contact Me
                  </span>
                </button>
              </li>
            </ul>
            <ul className='flex items-center gap-6'>

            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar