"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1,
    cssEase: 'linear',
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-gradient-to-r from-[#252525] to-[#474747]'>
      <div id='projects' className='max-w-[1440px] mx-auto py-16 max-lg:py-14 max-md:py-10 '>
        <div className='max-w-xxl mx-auto px-4'>
          <h2 className='font-roboto font-bold text-xxxl max-lg:text-4xl text-green max-sm:text-3xl mb-12 max-lg:mb-10 max-md:mb-8 max-sm:mb-6 overflow-hidden border-r-4 border-black whitespace-nowrap animate-typewriter'>
            projects<span className='text-light'>( )</span>
          </h2>
        </div>
        <Slider {...settings}>
          <div className='px-3'>
            <div className='border border-white rounded-xl'>
              <img src="/assets/images/slider-img.webp" alt="slider-img" className='rounded-t-xl' />
              <p className='font-roboto font-bold text-white text-4xl p-4 max-lg:text-3xl max-md:text-2xl max-md:p-3 max-sm:text-xl'>Project 1</p>
            </div>
          </div>
          <div className='px-3'>
            <div className='border border-white rounded-xl'>
              <img src="/assets/images/slider-img.webp" alt="slider-img" className='rounded-t-xl' />
              <p className='font-roboto font-bold text-white text-4xl p-4 max-lg:text-3xl max-md:text-2xl max-md:p-3 max-sm:text-xl'>Project 2</p>
            </div>
          </div>
          <div className='px-3'>
            <div className='border border-white rounded-xl'>
              <img src="/assets/images/slider-img.webp" alt="slider-img" className='rounded-t-xl' />
              <p className='font-roboto font-bold text-white text-4xl p-4 max-lg:text-3xl max-md:text-2xl max-md:p-3 max-sm:text-xl'>Project 3</p>
            </div>
          </div>
          <div className='px-3'>
            <div className='border border-white rounded-xl'>
              <img src="/assets/images/slider-img.webp" alt="slider-img" className='rounded-t-xl' />
              <p className='font-roboto font-bold text-white text-4xl p-4 max-lg:text-3xl max-md:text-2xl max-md:p-3 max-sm:text-xl'>Project 4</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
