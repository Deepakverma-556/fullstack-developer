'use client';
import React, { useState } from 'react';
import Modal from './Modal';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className='bg-gradient-to-r from-[#252525] to-[#474747] font-roboto pt-16 pb-16 max-lg:pt-14 max-md:pt-10 max-lg:pb-14 max-md:pb-10'>
            <div className='max-w-xxl mx-auto px-4'>
                <a href="#"><h2 className='text-green text-xxxl font-bold max-lg:text-4xl max-sm:text-3xl'>JOHN<span className='text-white'>DOE</span></h2></a>
                <div className='flex justify-between items-start max-lg:flex-col '>
                    <div>
                        <p className='text-white font-normal text-xl leading-6 max-w-[453px] max-lg:max-w-none pt-4 max-sm:text-base'>Eum earum possimus qui sunt possimus aut tempora aliquid ut veritatis architecto et voluptate enim id sint possimus. Aut nobis est fuga officia et nemo nulla et quod quia ex dolor placeat rem repudiandae voluptas.</p>
                    </div>
                    <div className='flex gap-10 items-center max-lg:pt-5 max-sm:flex-wrap max-sm:gap-6'>
                        <a href="https://www.linkedin.com/feed/" target='_blank' className='flex gap-2 max-sm:gap-1 items-center group '>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='group-hover:fill-green transtation-all duration-300' d="M26.9167 4.25C27.6681 4.25 28.3888 4.54851 28.9201 5.07986C29.4515 5.61122 29.75 6.33189 29.75 7.08333V26.9167C29.75 27.6681 29.4515 28.3888 28.9201 28.9201C28.3888 29.4515 27.6681 29.75 26.9167 29.75H7.08333C6.33189 29.75 5.61122 29.4515 5.07986 28.9201C4.54851 28.3888 4.25 27.6681 4.25 26.9167V7.08333C4.25 6.33189 4.54851 5.61122 5.07986 5.07986C5.61122 4.54851 6.33189 4.25 7.08333 4.25H26.9167ZM26.2083 26.2083V18.7C26.2083 17.4751 25.7218 16.3005 24.8557 15.4343C23.9895 14.5682 22.8149 14.0817 21.59 14.0817C20.3858 14.0817 18.9833 14.8183 18.3033 15.9233V14.3508H14.3508V26.2083H18.3033V19.2242C18.3033 18.1333 19.1817 17.2408 20.2725 17.2408C20.7985 17.2408 21.303 17.4498 21.6749 17.8217C22.0469 18.1937 22.2558 18.6982 22.2558 19.2242V26.2083H26.2083ZM9.74667 12.1267C10.3779 12.1267 10.9832 11.8759 11.4296 11.4296C11.8759 10.9832 12.1267 10.3779 12.1267 9.74667C12.1267 8.42917 11.0642 7.3525 9.74667 7.3525C9.11169 7.3525 8.50273 7.60474 8.05374 8.05374C7.60474 8.50273 7.3525 9.11169 7.3525 9.74667C7.3525 11.0642 8.42917 12.1267 9.74667 12.1267ZM11.7158 26.2083V14.3508H7.79167V26.2083H11.7158Z" fill="white" />
                            </svg>
                            <p className='font-bold text-white text-2xl max-sm:text-base group-hover:text-green transtation-all duration-300'>Linkedin</p>
                        </a>
                        <a href="https://github.com/" target='_blank' className='flex gap-2 items-center max-sm:gap-1 group'>
                            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='group-hover:fill-green transtation-all duration-300' d="M15 0.833252C13.1396 0.833252 11.2974 1.19968 9.57865 1.91163C7.85987 2.62357 6.29815 3.66708 4.98265 4.98257C2.32588 7.63934 0.833328 11.2427 0.833328 14.9999C0.833328 21.2616 4.89916 26.5741 10.5233 28.4582C11.2317 28.5716 11.4583 28.1324 11.4583 27.7499C11.4583 27.4241 11.4583 26.5316 11.4583 25.3557C7.53416 26.2057 6.69833 23.4574 6.69833 23.4574C6.04666 21.8141 5.12583 21.3749 5.12583 21.3749C3.83666 20.4966 5.225 20.5249 5.225 20.5249C6.64166 20.6241 7.3925 21.9841 7.3925 21.9841C8.625 24.1374 10.7075 23.4999 11.515 23.1599C11.6425 22.2391 12.0108 21.6157 12.4075 21.2616C9.2625 20.9074 5.96166 19.6891 5.96166 14.2916C5.96166 12.7191 6.5 11.4583 7.42083 10.4524C7.27916 10.0983 6.78333 8.62492 7.5625 6.71242C7.5625 6.71242 8.7525 6.32992 11.4583 8.15742C12.5775 7.84575 13.7958 7.68992 15 7.68992C16.2042 7.68992 17.4225 7.84575 18.5417 8.15742C21.2475 6.32992 22.4375 6.71242 22.4375 6.71242C23.2167 8.62492 22.7208 10.0983 22.5792 10.4524C23.5 11.4583 24.0383 12.7191 24.0383 14.2916C24.0383 19.7032 20.7233 20.8932 17.5642 21.2474C18.0742 21.6866 18.5417 22.5507 18.5417 23.8682C18.5417 25.7666 18.5417 27.2966 18.5417 27.7499C18.5417 28.1324 18.7683 28.5857 19.4908 28.4582C25.115 26.5599 29.1667 21.2616 29.1667 14.9999C29.1667 13.1395 28.8002 11.2973 28.0883 9.57857C27.3764 7.85979 26.3328 6.29807 25.0173 4.98257C23.7018 3.66708 22.1401 2.62357 20.4213 1.91163C18.7026 1.19968 16.8604 0.833252 15 0.833252Z" fill="white" />
                            </svg>
                            <p className='font-bold text-white text-2xl max-sm:text-base group-hover:text-green transtation-all duration-300'>Github</p>
                        </a>
                        <div>
                            <button onClick={openModal} className="bg-gradient-to-b from-green to-white rounded-xl p-[5px]">
                                <span className="flex gap-2 items-center  bg-[#434343] max-xsm:bg-[#323232] text-white py-3 px-5 max-sm:px-2 max-sm:py-2 max-sm:text-base rounded-xl font-bold text-xl">
                                    <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33 0.25H13.5C11.85 0.25 10.5 1.6 10.5 3.25V16.75C10.5 18.415 11.85 19.75 13.5 19.75H33C34.665 19.75 36 18.415 36 16.75V3.25C36 1.6 34.665 0.25 33 0.25ZM33 16.75H13.5V5.755L23.25 10.75L33 5.755V16.75ZM23.25 8.215L13.5 3.25H33L23.25 8.215ZM7.5 16.75C7.5 17.005 7.545 17.245 7.575 17.5H1.5C0.672 17.5 0 16.825 0 16C0 15.175 0.672 14.5 1.5 14.5H7.5V16.75ZM4.5 2.5H7.575C7.545 2.755 7.5 2.995 7.5 3.25V5.5H4.5C3.675 5.5 3 4.825 3 4C3 3.175 3.675 2.5 4.5 2.5ZM1.5 10C1.5 9.175 2.175 8.5 3 8.5H7.5V11.5H3C2.175 11.5 1.5 10.825 1.5 10Z" fill="white" />
                                    </svg> Contact Me
                                </span>
                            </button>
                            <Modal isOpen={isModalOpen} closeModal={closeModal} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer