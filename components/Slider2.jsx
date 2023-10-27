'use client';
import React from 'react';
import { useState } from 'react';
import { Card } from './Card';
import { BsChevronCompactLeft } from 'react-icons/bs';
import { BsChevronCompactRight } from 'react-icons/bs';
import fotman from '@/public/assets/images/Football-Manager-2024-G2Techshop-1-300x375.webp';
export const Slider2 = ({items=[]}) => {
    const [index, setIndex] = useState(0);
    const goLeft = () => {
        setIndex(index => 
            index === items.length - 5 ? items.length - 5 : index + 1);
    }
    const goRight = () => {

        setIndex(index => 
            index === 0 ? 0 : index - 1);
    }
  return (
    <div className='relative w-fit mx-auto'>
        <div className='max-w-[1200px] overflow-hidden'>
            <ul className='w-full whitespace-nowrap py-3' style={{transform: `translate3d(${index*20.2}%, 0, 0)`, transition: 'ease 1000ms'}}>
                {items.map((item, key) => (
                    <li className={`w-[19.2%] inline-block ${key % 5 === 4 ? 'ml-[1%]' : 'ml-[1%]'}`}>
                        <Card key={key} img={item.img} title={item.title} low={item.low} high={item.high} isOff={item.isOff} perc={item.perc} finishTime={item.finishTime}/>
                    </li>
                )
                )}
            </ul>
            
        </div>
        <div className={`absolute top-1/2 -left-6 h-24 w-12 flex justify-center items-center -translate-y-1/2 rounded-r-[3px] bg-white ${index === items.length - 5 ? 'opacity-25' : 'opacity-100 cursor-pointer'}`} onClick={goLeft}>
            <BsChevronCompactLeft size={35} color='black'/>
        </div>
        <div className={`absolute top-1/2 -right-6 h-24 w-12 flex justify-center items-center -translate-y-1/2 rounded-l-[3px] bg-white ${index === 0 ? 'opacity-25' : 'opacity-100 cursor-pointer'}`} onClick={goRight}>
            <BsChevronCompactRight size={35} color='black'/>
        </div>
    </div>
  )
}
