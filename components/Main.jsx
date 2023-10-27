import React from 'react';
import Link from 'next/link';
import { BsPercent, BsCheckCircleFill } from 'react-icons/bs';
import { FaRegCreditCard, FaGamepad, FaBookOpen } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { Carousel } from '@/components/Carousel';
import { Slider } from './Slider';
import { Card } from './Card';
import { Slider2 } from './Slider2';
import styles from '@/public/assets/styles/Main.module.css';
import MW3 from '@/public/assets/images/MWIII-REVEAL-FULL-TOUT.jpg';
import FC24 from '@/public/assets/images/FC24.webp';
import WorldOfWarcraft from '@/public/assets/images/World-of-Warcraft-Dragonflight.jpg';
import deepRock from '@/public/assets/images/DEEP-ROCK-GALACTIC-1.jpg';
import wolf1 from '@/public/assets/images/Wolfenstein-II-The-New-Colossus.jpg';
import gears5 from '@/public/assets/images/Gears-5.jpg';
import sea from '@/public/assets/images/Sea-of-Thieves.jpg';
import alliance from '@/public/assets/images/Jagged-Alliance-3.webp';
import sales from '@/public/assets/images/Sale-0416.png';
import fotman from '@/public/assets/images/Football-Manager-2024-G2Techshop-1-300x375.webp';
import kombat1 from '@/public/assets/images/Mortal-Kombat-1-600x360.webp';
import lords from '@/public/assets/images/Lords-of-the-Fallen-300x180.webp';
import division from '@/public/assets/images/Tom-Clancys-The-Division-2-G2Techshop-1-300x375.webp';
import UAH from '@/public/assets/images/UAH-300x188.jpg';


import Image from 'next/image';
import { Gifts } from './Gifts';
import { Slider3 } from './Slider3';
import { Slider4 } from './Slider4';


export const Main = () => {
    const carouselSlides = [
        {
            img: MW3, 
            link: 'product/call-of-duty-modern-warfare-3'
        }, 
        {
            img: FC24, 
            link: 'product/call-of-duty-modern-warfare-3'
        }
    ]

    const images = [
        {
            img: WorldOfWarcraft, 
            low: 799000,
            high: 2719500, 
            off: 52, 
        }, 
        {
            img: deepRock, 
            low: 135000,
            high: 143000, 
            off: 63, 
        }, 
        {
            img: wolf1, 
            low: 147000,
            high: 307000, 
            off: 83, 
        }, 
        {
            img: gears5, 
            low: 202000,
            high: 805000, 
            off: 76, 
        }, 
        {
            img: sea, 
            low: 140500,
            high: 1355000, 
            off: 52, 
        }, 
        {
            img: alliance, 
            low: 550500,
            high: 706000, 
            off: 34, 
        }, 
    ]
    const items1 = [
        {
            icon: <FaRegCreditCard size={40} className='text-[#7B0606DE]'/>, 
            title: 'گیفت کارت', 
        }, 
        {
            icon: <FaGamepad size={40} className='text-[#7B0606DE]'/>, 
            title: 'سرویس‌های اشتراکی', 
        }, 
        {
            icon: <TbWorld size={40} className='text-[#7B0606DE]'/>, 
            title: 'تغییر ریجن', 
        }, 
        {
            icon: <BsCheckCircleFill size={40} className='text-[#7B0606DE]'/>, 
            title: 'وریفای شماره موبایل', 
        }, 
    ]

    const items2 = [
        {
            img: fotman, 
            title: 'Football Manager 2024', 
            low: 1831500, 
            high: 3533000, 
            isOff: true, 
            perc: 9, 
            finishTime: '8 Oct 2023 16:40:00', 
        }, 
        {
            img: fotman, 
            title: 'Football Manager 2024', 
            low: 1831500, 
            high: 3533000, 
            isOff: false, 
            perc: 9, 
            finishTime: '8 Oct 2023 16:40:00', 
        }, 
        {
            img: fotman, 
            title: 'Football Manager 2024', 
            low: 1831500, 
            high: 3533000, 
            isOff: false, 
            perc: 9, 
            finishTime: '8 Oct 2023 16:40:00', 
        }, 
        {
            img: fotman, 
            title: 'Football Manager 2024', 
            low: 1831500, 
            high: 3533000, 
            isOff: false, 
            perc: 9, 
            finishTime: '8 Oct 2023 16:40:00', 
        }, 
        {
            img: fotman, 
            title: 'Football Manager 2024', 
            low: 1831500, 
            high: 3533000, 
            isOff: false, 
            perc: 9, 
            finishTime: '8 Oct 2023 16:40:00', 
        }, 
        {
            img: fotman, 
            title: 'Football Manager 2024', 
            low: 1831500, 
            high: 3533000, 
            isOff: false, 
            perc: 9, 
            finishTime: '8 Oct 2023 16:40:00', 
        }, 
        {
            img: fotman, 
            title: 'Football Manager 2024', 
            low: 1831500, 
            high: 3533000, 
            isOff: false, 
            perc: 9, 
            finishTime: '8 Oct 2023 16:40:00', 
        }, 
    ]

    const items3 = [
        {
            img: kombat1
        }, 
        {
            img: kombat1
        }, 
        {
            img: kombat1
        }, 
        {
            img: kombat1
        }, 
        {
            img: kombat1
        }, 
        {
            img: kombat1
        }, 

    ]

    const items4 = [
        {
            img: lords, 
            timeLeft: 4, 
             
        }, 
        {
            img: lords, 
            timeLeft: 4, 
            
        }, 
        {
            img: lords, 
            timeLeft: 4, 
            
        }, 
        {
            img: lords, 
            timeLeft: 4, 
            
        }, 

    ]
    const items5 = [
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
    ]
    const items6 = [
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
    ]
    const items7 = [
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
        {
            img: division, 
            title: 'Tom Clancy’s The Division 2', 
            low: 497000, 
            high: 2299000, 
            perc: 69,
        }, 
    ]
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
  return (
    <main className='main'>
        <section className='mt-2 mb-8'>
            <Carousel slides={carouselSlides}/>
        </section>
        <section className='mb-8 bg-[#fcfcfc] h-[250px] mt-4'>
            <ul className='max-w-[1300px] mx-auto flex justify-between items-center space-x-20 space-x-reverse'>
                {images.map((image, key) => (
                    <li className='relative w-[18%] h-fit'>
                        <Link href=''>
                            <Image
                                src={image.img}
                                height={300}
                                width={150}
                                className='w-full h-full rounded-t-xl'
                            />
                        </Link>
                        <span className='absolute top-0 left-0 w-10 h-5 flex justify-center items-center rounded-[4px] bg-red-600 text-white'>
                            <BsPercent size={12}/>
                            <small>{image.off}</small>
                        </span>
                        <span className='absolute top-[100%] left-0 w-full h-8 flex justify-center items-center rounded-b-xl bg-gray-500 text-white'>
                            <small>{image.low.toLocaleString('en-US')}-{image.high.toLocaleString('en-US')}</small>
                        </span>
                    </li>
                ))}
            </ul>
        </section>
        <section className='h-fit pt-6 pb-2 bg-[#D8D09B2E]'>
            <div className='max-w-[1600px] mx-auto'>
                <h4 className='mb-7 text-lg text-[#4E4E4EAB]'>کالکشن‌های پرطرفدار</h4>
                <Slider/>
            </div>
        </section>
        <section className='mt-10 mb-8'>
            <ul className='max-w-[1000px] mx-auto flex justify-between items-center space-x-5 space-x-reverse'>
                {items1.map((item, key) => (
                    <li key={key}>
                        <Link href='#' className='flex justify-start items-center space-x-2 space-x-reverse'>
                            {item.icon}
                            <span className='text-base font-bold text-[#7B0606DE]'>{item.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
        <section>
            <div className='relative'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.SVG}>
                    <path class="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z" fill='#DB1E1E80'>
                    </path>
                </svg>    
            </div>
        </section>
        <section className='pt-4 bg-[#DB1E1E80]'>
            <div className='max-w-[1300px] mx-auto flex justify-between items-center space-x-12 space-x-reverse'>
                <div>
                    <Image
                        src={sales}
                        height={240}
                        width={150}
                    />
                    <Link href='#' className='flex justify-center items-center w-28 py-2 rounded-[6px] bg-white'>
                        <span className='text-black text-sm'>مشاهده همه</span>
                    </Link>
                </div>
                <Slider2 items={items2}/>
            </div>
        </section>
        <section className='mt-10'>
            <ul className='max-w-[1200px] mx-auto grid grid-rows-2 grid-cols-3 gap-x-6 gap-y-4'>
                {items3.map((item, key) => (
                    <li className='row-span-1 col-span-1 transform duration-500 hover:-translate-y-2'>
                        <Link href=''>
                            <Image 
                                src={item.img}
                                height={360}
                                width={600}
                                className='w-full h-full rounded-xl'
                            />

                        </Link>
                    </li>
                ))}
            </ul>
        </section>
        <section className='mt-8 pt-4 pb-6 bg-[#E9E9E969]'>
            <ul className='max-w-[1200px] mx-auto flex justify-between items-center space-x-8 space-x-reverse'>
                {items4.map((item, key) => (
                    <li className='relative'>
                        <div className='transform duration-500 hover:-translate-y-2'>
                            <Link href='#'>
                                <Image
                                    src={item.img}
                                    height={180}
                                    width={300}
                                    className='w-full h-full rounded-xl'
                                />
                            </Link>
                        </div>
                        <div className='absolute -bottom-2 left-[60%] h-10 w-22 p-2 flex items-center rounded-[5px] text-sm bg-black text-white'>
                            {item.timeLeft.toLocaleString('en-US', {minimumIntegerDigits: 2})} روز تا انتشار
                        </div>

                    </li>
                ))}
            </ul>
        </section>
        <section>
            <div className='relative mt-10'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className={styles.SVG}>
                    <path class="elementor-shape-fill" d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
                    c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
                    c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z" fill='#12848475'>
                    </path>
                </svg>    
            </div>
        </section>
        <section className='pt-4 bg-[#12848475]'>
            <div className='max-w-[1300px] mx-auto flex justify-between items-center space-x-12 space-x-reverse'>
                <div className='space-y-10'>
                    <h1 className='text-xl text-white'>جدیدترین‌ ها</h1>
                    <Link href='#' className='flex justify-center items-center w-28 py-2 rounded-[6px] bg-white'>
                        <span className='text-black text-sm'>مشاهده همه</span>
                    </Link>
                </div>
                <Slider2 items={items2}/>
            </div>
        </section>
        <section className='mt-7 mb-6'>
            <div className='max-w-[1400px] mx-auto grid grid-rows-1 grid-cols-3 gap-x-10'>
                <div className='p-2 row-span-1 col-span-1 border-[1px] rounded-xl'>
                    <h1 className='pb-2 mb-3 text-xl text-center text-[#4F4F4FB8] border-b-[1px]'>برگزیده ها</h1>
                    <ul className='flex flex-col justify-start'>
                        {items5.map((item, key) => (
                            <li key={key} className='flex justify-start space-x-14 space-x-reverse border-b-[1px]'>
                                <Link href='#' className='relative'>
                                    <Image
                                        src={item.img}
                                        height={200}
                                        width={100}
                                        className='w-full h-full rounded-xl'
                                    />
                                    <span className='absolute top-0 left-0 w-10 h-5 flex justify-center items-center rounded-tl-xl bg-red-600 text-white'>
                                        <BsPercent size={12}/>
                                        <small>{item.perc}</small>
                                    </span>
                                </Link>
                                <div className='flex flex-col justify-center items-center space-y-3'>
                                    <Link href='#'>
                                        <h1 className='text-base text-[#606060D9] hover:text-black'>{item.title}</h1>
                                    </Link>
                                    <h1 className='text-sm text-[#97845C]'>{item.low.toLocaleString('en-US')}تومان - {item.high.toLocaleString('en-US')}تومان</h1>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center items-center mt-5'>
                        <Link href='' className='text-base text-[#868686]'>
                            مشاهده همه &gt;&gt;
                        </Link>
                    </div>
                </div>
                <div className='p-2 row-span-1 col-span-1 border-[1px] rounded-xl'>
                    <h1 className='pb-2 mb-3 text-xl text-center text-[#4F4F4FB8] border-b-[1px]'>کردیت ها</h1>
                    <ul className='flex flex-col justify-start'>
                        {items5.map((item, key) => (
                            <li key={key} className='flex justify-start space-x-14 space-x-reverse border-b-[1px]'>
                                <Link href='#' className='relative'>
                                    <Image
                                        src={item.img}
                                        height={200}
                                        width={100}
                                        className='w-full h-full rounded-xl'
                                    />
                                    <span className='absolute top-0 left-0 w-10 h-5 flex justify-center items-center rounded-tl-xl bg-red-600 text-white'>
                                        <BsPercent size={12}/>
                                        <small>{item.perc}</small>
                                    </span>
                                </Link>
                                <div className='flex flex-col justify-center items-center space-y-3'>
                                    <Link href='#'>
                                        <h1 className='text-base text-[#606060D9] hover:text-black'>{item.title}</h1>
                                    </Link>
                                    <h1 className='text-sm text-[#97845C]'>{item.low.toLocaleString('en-US')}تومان - {item.high.toLocaleString('en-US')}تومان</h1>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center items-center mt-5'>
                        <Link href='' className='text-base text-[#868686]'>
                            مشاهده همه &gt;&gt;
                        </Link>
                    </div>
                </div>
                <div className='p-2 row-span-1 col-span-1 border-[1px] rounded-xl'>
                    <h1 className='pb-2 mb-3 text-xl text-center text-[#4F4F4FB8] border-b-[1px]'>پرفروش‌ ترین ها</h1>
                    <ul className='flex flex-col justify-start'>
                        {items5.map((item, key) => (
                            <li key={key} className='flex justify-start space-x-14 space-x-reverse border-b-[1px]'>
                                <Link href='#' className='relative'>
                                    <Image
                                        src={item.img}
                                        height={200}
                                        width={100}
                                        className='w-full h-full rounded-xl'
                                    />
                                    <span className='absolute top-0 left-0 w-10 h-5 flex justify-center items-center rounded-tl-xl bg-red-600 text-white'>
                                        <BsPercent size={12}/>
                                        <small>{item.perc}</small>
                                    </span>
                                </Link>
                                <div className='flex flex-col justify-center items-center space-y-3'>
                                    <Link href='#'>
                                        <h1 className='text-base text-[#606060D9] hover:text-black'>{item.title}</h1>
                                    </Link>
                                    <h1 className='text-sm text-[#97845C]'>{item.low.toLocaleString('en-US')}تومان - {item.high.toLocaleString('en-US')}تومان</h1>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center items-center mt-5'>
                        <Link href='' className='text-base text-[#868686]'>
                            مشاهده همه &gt;&gt;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className='py-6 my-8 bg-[#EFECEC52]'>
            <Gifts/>
        </section>
        <section className='my-8'>
            <Slider3/>
        </section>
        <section className='pt-6 bg-[#36495F91]'>
            <div className='max-w-[1200px] mx-auto'>
                <div className='mb-4 flex justify-start items-center space-x-3 space-x-reverse'>
                    <FaBookOpen size={20} className='text-[#D5D5D5]'/>
                    <h1 className='text-lg text-white'>آموزش ها &gt;&gt;</h1>
                </div>
                <Slider4/>
            </div>
        </section>
    </main>
  )
}
