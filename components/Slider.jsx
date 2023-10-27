'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxDotFilled } from 'react-icons/rx';
import fc from '@/public/assets/images/ea-sports-fc-24.jpeg';
import rain from '@/public/assets/images/rainbow-six-sige.webp';
import call from '@/public/assets/images/Call-of-Duty.webp';
import diab from '@/public/assets/images/Diablo-iv-4.webp';
import fort from '@/public/assets/images/fortnite2.webp';
import over from '@/public/assets/images/Overwatch-2.webp';
import re from '@/public/assets/images/Resident-Evil-4.webp';
import ass from '@/public/assets/images/assassins-creed-mirage-2.webp';
import far from '@/public/assets/images/far-cry-6.webp';
import division from '@/public/assets/images/division-2-1.webp';


export const Slider = () => {
    const items = [
        fc, 
        rain, 
        call, 
        diab, 
        fort, 
        over, 
        re, 
        ass, 
        far, 
        division, 
        fc, 
        rain
    ]
    const [index, setIndex] = useState(0);
  return (
    <div className='relative h-[200px] max-w-[1600px] overflow-hidden'>
        <div className='w-full h-fit whitespace-nowrap' style={{transform: `translate3d(${index*100}%, 0, 0)`, transition: 'ease 1000ms'}}>
            {items.map((item, key) => (
                <Link key={key} href='' className={`inline-block w-[15%] ${key !== 5 ? 'ml-[2%]' : ''}`}>
                    <Image
                        src={item}
                        height={360}
                        width={600}
                        className='w-full h-[150px] rounded-2xl'
                    />
                </Link>
            ))}
        </div>
        <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-between items-center'>
            <RxDotFilled size={20} onClick={() => setIndex(0)} className={`${index === 0 ? 'text-black' : 'text-slate-400'}`}/>
            <RxDotFilled size={20} onClick={() => setIndex(1)} className={`${index === 1 ? 'text-black' : 'text-slate-400'}`}/>
        </div>
    </div>
  )
}
