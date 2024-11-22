import React from "react";
import Heading from "./common/Heading";

const AboutMe = () => {
  return (
    <div id="about" className="pb-20 max-lg:pb-14 max-md:pb-10 about_section">
      <div className="max-w-xxl px-4 mx-auto">
        <div className="flex items-center flex-wrap -mx-3 justify-between">
          <div className="w-full sm:w-6/12 px-3 ">
            <Heading value="aboutMe()" parent=".about_section"/>
            <div>
              <p className='font-roboto text-3xl text-light-gray leading-xl max-lg:text-2xl max-md:text-xl max-sm:text-base max-sm:leading-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer velit turpis, finibus eu condimentum ut, posuere at ipsum. Maecenas vel consequat mauris. Quisque sodales ipsum aliquet aliquam placerat. Proin varius condimentum sapien. Mauris quis elit nibh. Morbi ut facilisis nisl. Duis et leo ut odio rhoncus porta a a dui. Nullam arcu nibh, bibendum in enim sed, ullamcorper feugiat nunc. </p>
            </div>
          </div>
          <div className="w-5/12 px-3 font-courier max-md:w-5/12 max-sm:w-full max-sm:pt-6">
            <div className="flex items-center justify-between bg-medium-gray p-6 max-md:p-3 rounded-md shadow-[0px_4px_10px_5px] shadow-[#00000040]">
              <div className="">
                <p className="font-bold text-3xl text-white pb-5 max-md:pb-2 max-lg:text-2xl max-md:text-xl max-md:text-nowrap">
                  Fullstack Developer
                </p>
                <a
                  href="#"
                  className="text-2xl max-lg:text-xl max-md:text-lg text-green  max-sm:text-base group relative"
                >
                  Projects
                  <div className="absolute border-b-2 border-green left-0 right-0 bottom-0 transition-all duration-300 group-hover:left-1/2 group-hover:right-1/2"></div>
                </a>
              </div>
              <p className="text-green font-bold text-2xl max-lg:text-xl max-md:text-base">
                &lt;/&gt;
              </p>
            </div>
            <div className="flex items-center justify-between bg-medium-gray p-6 max-md:p-3 rounded-md shadow-[0px_4px_10px_5px] shadow-[#00000040] mt-2">
              <div className="">
                <p className="font-bold text-3xl text-white pb-5 max-md:pb-2 max-lg:text-2xl max-md:text-xl">
                  Freelancer
                </p>
                <a
                  href="#"
                  className="text-2xl max-lg:text-xl max-md:text-lg text-green  max-sm:text-base group relative"
                >
                  Hire me!
                  <div className="absolute border-b-2 border-green left-0 right-0 bottom-0 transition-all duration-300 group-hover:left-1/2 group-hover:right-1/2"></div>
                </a>
              </div>
              <p className="text-green font-bold text-2xl max-lg:text-xl max-md:text-lg">{`{ }`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
