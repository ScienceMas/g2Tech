'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BsPercent } from 'react-icons/bs';
import { FaRegClock } from 'react-icons/fa';
import fotman from '@/public/assets/images/Football-Manager-2024-G2Techshop-1-300x375.webp';
export const Card = ({img=fotman, title='Football Manager 2024', low=1831500, high=3533000, isOff=false, perc=9, finishTime='8 Oct 2023 16:40:00'}) => {
    const futureDate = new Date(finishTime).getTime();
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        setInterval(() => {
            const now = new Date().getTime();
            const timeleft = futureDate - now;
            setDays(Math.floor( timeleft / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
        }, 1000)
    })
  return (
    <div className='relative h-[390px] w-full pt-1 shadow-2xl rounded-xl bg-white transform duration-150 hover:-translate-y-1'>
        <div className='mx-1'>
            <Link href='#'>
                <Image 
                    src={img}
                    height={375}
                    width={300}
                    className='w-full h-[240px] rounded-[6px]'
                />
            </Link>
        </div>
        <div className={`${isOff ? 'flex' : 'hidden'} absolute top-2 right-2 w-10 h-5 justify-center items-center rounded-[2px] bg-red-500 text-white`}>
            <BsPercent/>
            <span>{perc}</span>
        </div>
        <h1 className='text-center text-xs font-bold mx-2 my-3'>{title}</h1>
        <h2 className='text-center text-sm mx-2 whitespace-pre-wrap'>{low.toLocaleString('en-US')}تومان - {high.toLocaleString('en-US')}تومان</h2>
        <div dir='ltr' className={`${isOff ? 'flex' : 'hidden'} absolute bottom-0 left-0 w-full h-11 justify-center items-center space-x-3 border-t-[1px]`}>
            <FaRegClock/>
            <span>{days.toLocaleString('en-US', {minimumIntegerDigits: 2})} : {hours.toLocaleString('en-US', {minimumIntegerDigits: 2})} : {minutes.toLocaleString('en-US', {minimumIntegerDigits: 2})} : {seconds.toLocaleString('en-US', {minimumIntegerDigits: 2})}</span>
        </div>
    </div>
  )
}
