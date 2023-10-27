'use client';
import React, { useState, useRef, useEffect } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';

export const Carousel = ({slides=[]}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2000;
    const prevSlide = () => {
        const newIndex = currentIndex === 0 ? slides.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const newIndex = currentIndex === slides.length-1 ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (index) => {
        setCurrentIndex(index);
    }

    const resetTimeout = () => {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setCurrentIndex(prevIndex => 
                prevIndex === slides.length-1 ? 0 : prevIndex+1)
        }, delay);
        return () => resetTimeout();
    }, [currentIndex])

  return (
    <div className='slideshow relative max-w-[1700px] mx-auto overflow-hidden group'>
        <div className='whitespace-nowrap w-full h-[720px]' style={{transform: `translate3d(${currentIndex*100}%, 0, 0)`, transition: 'ease-in-out 1000ms'}}>
            {slides.map((slide, index) => (
                <Link href={slide.link} className='inline-block'>
                    <Image
                        key={index}
                        src={slide.img}
                        height={700}
                        width={1400}
                        className='w-[1700px] h-[720px] inline-block rounded-2xl'
                    />
                </Link>
            ))}
        </div>
        <div className='slideshow-btns absolute right-1/2 bottom-4 translate-x-1/2 text-center flex justify-between'>
            {slides.map((_, index) => (
                <button type='button' name={`slideshow-btn${index}`} onClick={() => goToSlide(index)}>
                    <RxDotFilled color={`${index === currentIndex ? 'blue' : 'black'}`} className='h-8 w-8'/>
                </button>
            ))}
        </div>
        <button type='button' name='previous-btn' className='prev-btn absolute top-1/2 left-6 -translate-y-1/2 hidden group-hover:block rounded-full hover:bg-gray-900/25 hover:text-blue-700' onClick={nextSlide}>
            <BsChevronCompactLeft className='h-10 w-10'/>
        </button>
        <button type='button' name='next-btn' className='next-btn absolute top-1/2 right-6 -translate-y-1/2 hidden group-hover:block rounded-full hover:bg-gray-900/25 hover:text-blue-700' onClick={prevSlide}>
            <BsChevronCompactRight className='h-10 w-10'/>
        </button>
        
    </div>
  )
}
