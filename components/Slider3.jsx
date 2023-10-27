'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LiaAngleLeftSolid } from 'react-icons/lia';
import { LiaAngleRightSolid } from 'react-icons/lia';
import freeToPlay from '@/public/assets/images/free-to-play-300x225.webp';



export const Slider3 = () => {
    const items = [
        freeToPlay, 
        freeToPlay, 
        freeToPlay, 
        freeToPlay, 
        freeToPlay, 
        freeToPlay, 
        freeToPlay, 
        freeToPlay, 
        freeToPlay, 
        freeToPlay, 

    ]
    const [index, setIndex] = useState(0);
    const goLeft = () => {
        setIndex(index => 
            index === 1 ? 1 : index + 1);
    }

    const goRight = () => {
        setIndex(index => 
            index === 0 ? 0 : index - 1);
    }
  return (
    <div className='relative w-fit mx-auto'>
        <div className='max-w-[1400px] overflow-hidden'>
            <div className='w-full h-fit whitespace-nowrap' style={{transform: `translate3d(${index*100}%, 0, 0)`, transition: 'ease 1000ms'}}>
                {items.map((item, key) => (
                    <Link key={key} href='' className={`inline-block w-[18.4%] ${key % 5 !== 4 ? 'ml-[2%]' : ''}`}>
                        <Image
                            src={item}
                            height={225}
                            width={300}
                            className='w-full h-auto rounded-2xl'
                        />
                    </Link>
                ))}
            </div>
            
        </div>
        <div className='absolute top-1/2 -left-4 -translate-y-1/2 h-12 w-11 flex justify-center items-center rounded-xl border-2 cursor-pointer transition duration-500 bg-[#FFFFFFB8] hover:bg-black hover:opacity-80 hover:border-0 group' onClick={goLeft}>
            <LiaAngleLeftSolid size={20} className='text-black transition duration-500 group-hover:text-white'/>
        </div>
        <div className='absolute top-1/2 -right-4 -translate-y-1/2 h-12 w-11 flex justify-center items-center rounded-xl border-2 cursor-pointer transition duration-500 bg-[#FFFFFFB8] hover:bg-black hover:opacity-80 hover:border-0 group' onClick={goRight}>
            <LiaAngleRightSolid size={20} className='text-black transition duration-500 group-hover:text-white'/>
        </div>
    </div>
  )
}
