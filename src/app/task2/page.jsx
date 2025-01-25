'use client'

import { useState } from 'react';
import Card from './card';
import style from './page.module.css';

const Task2 = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const cards = [
        { statistics: "23", title: "All Courses", description: "courses you're powering through right now."},
        { statistics: "05", title: "Upcoming Courses", description: "exciting new courses waiting to boost your skills"},
        { statistics: "10", title: "Ongoing Courses", description: "currently happening-don't miss out on the action!"},
    ]

    const clickHandler = (index) => {
        setActiveIndex(index);
    }

    return (
        <div className={`w-full h-screen bg-[--task2-white] px-28 ${style.wrapper}`}>
            <section className="py-16">
                <p className='text-[24px] font-[400] text-gray-900'>Explore our classes and master trending skills!</p>
                <h1 className='text-[32px] font-[700] text-[#2B2B2B]'>Dive Into <span className='text-[#1DA077]'>What's Hot Right Now!</span>🔥</h1>
            </section>
            <section className={`flex gap-6 w-full max-w-[1300px] justify-between`}>
                {
                    cards && cards.map((cardDetail, index) => <Card 
                        key={index}
                        statistics={cardDetail.statistics}
                        title={cardDetail.title}
                        description={cardDetail.description}
                        active={ index===activeIndex }
                        illustrationPos={ activeIndex - index }
                        onClick={ () => clickHandler(index) }
                    />)
                }
            </section>
        </div>
    )
}

export default Task2;