"use client"
import React, { useState } from 'react'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            title: 'Q1 What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            title: 'Q2 What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            title: 'Q3 What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            title: 'Q4 What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            title: 'Q5 What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
    ];

    return (
        <div className='bg-dark pt-16 pb-16 max-lg:pt-14 max-md:pt-10 max-lg:pb-14 max-md:pb-10 font-roboto'>
            <div className='max-w-xxl mx-auto px-4'>
                <h2 className='text-green text-center text-xxxl font-bold font-roboto max-lg:text-4xl max-sm:text-3xl'>FAQs<span className='text-white'>( )</span></h2>
                <div className="accordion pt-1">
                    {accordionData.map((item, index) => (
                        <div className="border-b border-green py-2 mt-5" key={index}>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
                                <p className='text-white text-[35px] max-lg:text-3xl max-md:text-2xl max-sm:text-base font-bold'>{item.title}</p>
                                <div className={`transition-all duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                    <svg className='max-md:w-[25px]' width="33" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3L16.5 16L30 3" stroke="#70FF00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                {activeIndex === index && (
                                    <p className="text-green py-2 text-2xl font-normal max-md:text-[18px] max-sm:text-sm pr-6">{item.content}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq