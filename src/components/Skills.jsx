import React from 'react'

const Skills = () => {
      const CARDS = [
        {
            image: '/assets/images/javascript-img.webp',
            title: 'JavaScript'
        },
        {
            image: '/assets/images/typescript-img.webp',
            title: 'TypeScript'
        },
        {
            image: '/assets/images/html-img.webp',
            title: 'Html'
        }, {
            image: '/assets/images/css-img.webp',
            title: 'CSS'
        }, {
            image: '/assets/images/react-img.webp',
            title: 'React JS'
        }, {
            image: '/assets/images/nextjs-img.webp',
            title: 'Next JS'
        }, {
            image: '/assets/images/nodejs-img.webp',
            title: 'Node JS'
        }, {
            image: '/assets/images/python-img.webp',
            title: 'Python'
        },
        {
            image: '/assets/images/ruby-img.webp',
            title: 'Ruby'
        }, {
            image: '/assets/images/linux-img.webp',
            title: 'Linux'
        }, {
            image: '/assets/images/rails-img.webp',
            title: 'Rails'
        }, {
            image: '/assets/images/redux-img.webp',
            title: 'Redux'
        },
    ]
    return (
        <div id='skills' className='bg-dark pt-16 pb-16 max-lg:pt-14 max-md:pt-10 max-lg:pb-14 max-md:pb-10'>
            <div className='max-w-xxl mx-auto px-4'>
                <h2 className='skills text-green text-xxxl font-bold font-roboto max-lg:text-4xl max-sm:text-3xl overflow-hidden border-r-4 border-black whitespace-nowrap animate-typewriter'>skills<span className='text-white'>( )</span></h2>
                <div className='flex flex-wrap flex-row -mx-4 pt-4 max-md:pt-0'>
                    {CARDS.map((obj, index) => (
                        <div key={index} className="w-1/2 sm:w-1/3 md:w-3/12 lg:w-2/12 px-3 pt-6">
                            <div className=''>
                                <img src={obj.image} alt={obj.title} className=' h-32 mx-auto max-sm:h-24 max-md:h-28 max-lg:h-32' />
                                <p className="text-light text-center text-xl font-roboto font-semibold pt-4 max-sm:text-base max-md:text-[18px] max-md:pt-2">{obj.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills