'use client';
import React, { useState, useRef } from 'react';

const AccordionItem = ({ handleToggle, active, faq }) => {
    const contentEl = useRef();
    const { digit, title, content } = faq;

    return (
        <div className="rc-accordion-card">
            <div className="rc-accordion-header py-3 max-md:py-2">
                <div className={`rc-accordion-toggle p-3 ${active === digit ? 'active' : ''}`} onClick={() => handleToggle(digit)}>
                    <div className='flex gap-2 '>
                        <p className='text-white text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-bold'>{digit}</p>
                        <p className='text-white text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-base font-bold'>{title}</p>
                    </div>
                    <div className={`transition-transform duration-500 ${active === digit ? 'rotate-180' : 'rotate-0'}`}>
                        <svg className='max-sm:w-[17px]' width="19" height="19" viewBox="0 0 33 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3L16.5 16L30 3" stroke="#70FF00" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === digit ? 'show' : ''}`} style={
                active === digit
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <p className=" text-white pb-3 text-2xl font-normal max-md:text-base max-sm:text-sm pr-2 pl-12 max-lg:pl-10 max-md:pl-9 max-sm:pl-7">
                    {content}
                </p>
            </div>
        </div>
    );
};

const Faqs = () => {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        setActive((prev) => (prev === index ? null : index));
    };

    const faqData = [
        {
            digit: 'Q1',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            digit: 'Q2',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            digit: 'Q3',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            digit: 'Q4',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
        {
            digit: 'Q5',
            title: 'What anyone can ask regarding the work?',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
        },
    ];

    return (
        <div className="bg-dark py-20 max-lg:py-14 max-md:py-10  font-roboto'">
            <div className='max-w-xxl mx-auto px-4'>
                <h2 className='text-green text-xxxl font-bold font-roboto max-lg:text-4xl max-sm:text-3xl'>FAQs<span className='text-white'>( )</span></h2>
                <div className="">
                    <div className="mt-8  flex flex-col gap-8 max-sm:gap-4">
                        {faqData.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                active={active}
                                handleToggle={handleToggle}
                                faq={faq}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;