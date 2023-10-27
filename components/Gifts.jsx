'use client';
import React from 'react';
import { useState } from 'react';
import UAH from '@/public/assets/images/UAH-300x188.jpg';
import Link from 'next/link';
import Image from 'next/image';
export const Gifts = () => {
    const [display, setDisplay] = useState('hidden');
    const [isHover, setIsHover] = useState(false);
    const [index, setIndex] = useState(null);
    const [transition, setTransition] = useState(false);
    const items8 = [
        {
            img: UAH, 
            title: 'گیفت کارت اوکراین', 
            platform: 'استیم', 
        }, 
        {
            img: UAH, 
            title: 'گیفت کارت اوکراین', 
            platform: 'استیم', 
        }, 
        {
            img: UAH, 
            title: 'گیفت کارت اوکراین', 
            platform: 'استیم', 
        }, 
        {
            img: UAH, 
            title: 'گیفت کارت اوکراین', 
            platform: 'استیم', 
        }, 
        {
            img: UAH, 
            title: 'گیفت کارت اوکراین', 
            platform: 'استیم', 
        }, 
        {
            img: UAH, 
            title: 'گیفت کارت اوکراین', 
            platform: 'استیم', 
        }, 
    ]
    const showText = (key) => {
        setIndex(key);
        setDisplay('flex');
        setIsHover(true);
        setTimeout(() => {
            setTransition(true);
        }, 20)
    }

    const hideText = () => {
        if(!isHover){
            setDisplay('hidden');
            setTransition(false);
            setIndex(null);
        }
    }
  return (
    <div className='max-w-[1200px] mx-auto flex justify-between items-center space-x-6 space-x-reverse'>
        <div className='space-y-6'>
            <h1 className='text-xl text-[#4F4F4FD1]'>گیفت کارت ها</h1>
            <Link href='#' className='flex justify-center items-center w-28 py-2 rounded-[6px]'>
                <span className='text-[#4F4F4FD1] text-sm'>مشاهده همه &gt;&gt;</span>
            </Link>
        </div>
        <ul className='grid grid-flow-col grid-row-1 grid-cols-6 gap-x-3'>
            {items8.map((item, key) => (
                <li key={key} className='relative row-span-1 col-span-1 group' onMouseOver={() => showText(key)} onMouseLeave={() => setIsHover(false)}>
                    <Link href=''>
                        <Image
                            src={item.img}
                            height={188} 
                            width={300}
                            className='w-full h-full rounded-xl transform duration-500 group-hover:opacity-10'
                        />
                        <div className={`opacity-0 absolute top-1/2 right-[10%] -translate-y-[70%] text-lg text-[#020160] flex-col justify-start items-center transition ease-in-out duration-500 ${index === key ? display : 'hidden'} ${transition ? 'group-hover:opacity-100' : ''}`} onTransitionEnd={hideText}>
                            <h1>{item.title}</h1>
                            <h1>{item.platform}</h1>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
