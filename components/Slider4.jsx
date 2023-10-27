'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaAngleLeft } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa';
import gamingProblems from '@/public/assets/images/gamin-problems.jpg';
export const Slider4 = () => {
    const [index, setIndex] = useState(0);
    const goLeft = () => {
        setIndex(index => 
            index === items.length - 4 ? items.length - 4 : index + 1);
    }
    const goRight = () => {

        setIndex(index => 
            index === 0 ? 0 : index - 1);
    }

    const items = [
        {
            img: gamingProblems, 
            title: 'رفع مشکلات بازی های کامپیوتری - قسمت دوم', 
        }, 
        {
            img: gamingProblems, 
            title: 'رفع مشکلات بازی های کامپیوتری - قسمت دوم', 
        }, 
        {
            img: gamingProblems, 
            title: 'رفع مشکلات بازی های کامپیوتری - قسمت دوم', 
        }, 
        {
            img: gamingProblems, 
            title: 'رفع مشکلات بازی های کامپیوتری - قسمت دوم', 
        }, 
        {
            img: gamingProblems, 
            title: 'رفع مشکلات بازی های کامپیوتری - قسمت دوم', 
        }, 
        {
            img: gamingProblems, 
            title: 'رفع مشکلات بازی های کامپیوتری - قسمت دوم', 
        }, 
    ]

  return (
        <div className='relative max-w-[1200px] mx-auto overflow-hidden'>
            <ul className='w-full whitespace-nowrap py-3' style={{transform: `translate3d(${index*25.5}%, 0, 0)`, transition: 'ease 1000ms'}}>
                {items.map((item, key) => (
                    <li className={`w-[23.5%] inline-block ${key % 4 === 3 ? 'ml-[2%]' : 'ml-[2%]'}`}>
                        <div className='p-2 pb-11 rounded-xl bg-white'>
                            <Link href='#'>
                                    <Image 
                                        src={item.img} 
                                        height={400} 
                                        width={600}
                                        className='w-full h-auto mb-3 rounded-xl'
                                    />
                                    <h1 className='whitespace-pre-wrap text-[#333333D9]'>{item.title}</h1>
                            </Link> 
                        </div>
                    </li>
                )
                )}
            </ul>    
            <div className='absolute top-1/2 left-6 h-10 w-10 -translate-y-1/2 rounded-full flex justify-center items-center bg-[#5B5B5B] cursor-pointer' onClick={goLeft}>
                <FaAngleLeft size={25} color='white'/>
            </div>
            <div className='absolute top-1/2 right-6 h-10 w-10 -translate-y-1/2 rounded-full flex justify-center items-center bg-[#5B5B5B] cursor-pointer' onClick={goRight}> 
                <FaAngleRight size={25} color='white'/>
            </div>
        </div>
  )
}
