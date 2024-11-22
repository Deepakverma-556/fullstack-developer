"use client"
import React, { useState } from 'react'

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionData = [
        {
            no: 'Q1',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            no: 'Q2',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            no: 'Q3',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            no: 'Q4',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            no: 'Q5',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
    ];

    return (
        <div className='bg-dark pt-16 pb-16 max-lg:pt-14 max-md:pt-10 max-lg:pb-14 max-md:pb-10 font-roboto'>
            <div className='max-w-xxl mx-auto px-4'>
                <h2 className='text-green leading-none text-xxxl font-bold font-roboto max-lg:text-4xl max-sm:text-3xl overflow-hidden border-r-4 border-black whitespace-nowrap animate-faq'>FAQs<span className='text-white'>( )</span></h2>
                <div className="accordion pt-5 max-sm:pt-1">
                    {accordionData.map((item, index) => (
                        <div className="border-b border-green py-2 mt-5 max-sm:mt-2" key={index}>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion(index)}>
                                <div className='flex gap-2'>
                                    <p className='text-white text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-bold'>{item.no}</p>
                                    <p className='text-white text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-bold'>{item.title}</p>
                                </div>
                                <div className={`transition-transform duration-700 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
                                    <svg className='max-sm:w-[17px]' width="19" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3 3L16.5 16L30 3" stroke="#70FF00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className={`overflow-hidden transition-all duration-700 ${activeIndex === index ? 'max-h-[1000px]' : 'max-h-0'}`}>
                                <p className="text-white py-2 max-sm:py-1 text-2xl font-normal max-md:text-base max-sm:text-sm pr-2 pl-12 max-lg:pl-10 max-md:pl-9 max-sm:pl-7">{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq