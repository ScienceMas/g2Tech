"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaRegCheckSquare, FaAngleDown } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import logo from '@/public/assets/images/logo.png';
import userAvatar from '@/public/assets/images/user-avatar.png';
import uncharted from '@/public/assets/images/UNCHARTED-Legacy-of-Thieves.jpg';
import styles from '@/public/assets/styles/Navbar.module.css';
export const Navbar = () => {
    const submenu1Titles = [
        'پلتفرم', 
        'ژانر-ویژگی', 
        'پرطرفدارها', 
        'پرطرفدارها', 
    ]

    const submenu1Items = [
        [
            {
                name: 'steam', 
                path: '#', 
            }, 
            {
                name: 'EA', 
                path: '#', 
            }, 
            {
                name: 'Battle.net', 
                path: '#', 
            }, 
            {
                name: 'Ubisofy', 
                path: '#', 
            }, 
            {
                name: 'Epic', 
                path: '#', 
            }, 
            {
                name: 'Rockstar', 
                path: '#', 
            }, 
            {
                name: 'Microsoft', 
                path: '#', 
            }, 
            {
                name: 'Other', 
                path: '#', 
            }, 
            {
                name: 'نرم‌افزار', 
                path: '#', 
            }, 
        ], 
        [
            {
                name: 'Action', 
                path: '#', 
            }, 
            {
                name: 'Advanture', 
                path: '#', 
            }, 
            {
                name: 'Fantasty', 
                path: '#', 
            }, 
            {
                name: 'Funny', 
                path: '#', 
            }, 
            {
                name: 'Horror', 
                path: '#', 
            }, 
            {
                name: 'Online Co-op', 
                path: '#', 
            }, 
            {
                name: 'Online PvP', 
                path: '#', 
            }, 
            {
                name: 'Racing', 
                path: '#', 
            }, 
            {
                name: 'RPG', 
                path: '#', 
            }, 
            {
                name: 'Simulation', 
                path: '#', 
            }, 
            {
                name: 'Strategy', 
                path: '#', 
            }, 
            {
                name: 'Story Rich', 
                path: '#', 
            }, 
        ], 
        [
            {
                name: 'Apex Legends', 
                path: '#', 
            }, 
            {
                name: "Assassin's Creed", 
                path: '#', 
            }, 
            {
                name: 'Battlefield', 
                path: '#', 
            }, 
            {
                name: 'Call Of Duty', 
                path: '#', 
            }, 
            {
                name: 'Density2', 
                path: '#', 
            }, 
            {
                name: 'The Division', 
                path: '#', 
            }, 
            {
                name: 'FIFA', 
                path: '#', 
            }, 
            {
                name: 'Fortnite', 
                path: '#', 
            }, 
            {
                name: 'Forza', 
                path: '#', 
            }, 
            {
                name: 'Ghost Reacon', 
                path: '#', 
            }, 
            {
                name: 'GTA', 
                path: '#', 
            }, 
        ], 
        [
            {
                name: 'LOL', 
                path: '#', 
            }, 
            {
                name: 'Mortal Kombat', 
                path: '#', 
            }, 
            {
                name: 'Mincraft', 
                path: '#', 
            }, 
            {
                name: 'Need For Speed', 
                path: '#', 
            }, 
            {
                name: 'Pubg', 
                path: '#', 
            }, 
            {
                name: 'Rainbow Six', 
                path: '#', 
            }, 
            {
                name: 'Red Dead', 
                path: '#', 
            }, 
            {
                name: 'Resident Evil', 
                path: '#', 
            }, 
            {
                name: 'Rogue Company', 
                path: '#', 
            }, 
            {
                name: 'Sea Of Theives', 
                path: '#', 
            }, 
            {
                name: 'Valorant', 
                path: '#', 
            }, 
        ], 

    ]
    const submenu2Items = [
        'Credits', 
        'DLC', 
    ]

    const [display, setDisplay] = useState('hidden');
    const [transition, setTransition] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const showSubmenu = (index) => {
        setCurrentIndex(index);
        setDisplay('flex');
        setIsHover(true);
        setTimeout(() => {
            setTransition(true);
        }, 20)
    }
    
    const hideSubmenu = () => {
        if(!isHover){
            setDisplay('hidden');
            setTransition(false);
            setCurrentIndex(null);
        }
    }

  return (
    <header className='header'>
        <div className='bg-black py-4'>
            <nav className='max-w-5xl mx-auto flex justify-between items-center'>
                <div className='logo-wrapper'>
                    <Link href='#'>
                        <Image 
                            src={logo} 
                            height={60} 
                            width={60}
                        />
                    </Link>
                </div>
                <div className='search-wrapper relative w-[60%]'> 
                    <form method='get' action='#' className='h-12 py-2 pr-1 pl-14 rounded-xl bg-white'> 
                        <input type='text' className='w-full h-full py-1 px-3 placeholder:text-base placeholder:text-br' dir='rtl' placeholder='جستجو...'/>
                    </form>
                    <Link href='#'>
                        <AiOutlineSearch color='gray' size={20} className='absolute top-1/2 left-3 -translate-y-1/2'/>
                    </Link>
                </div>
                <div className='navbar-left flex justify-between items-center'> 
                    <div className='px-1 flex justify-start align-center space-x-2 space-x-reverse rounded-xl border-[1px] border-white'>
                        <Image 
                            src={userAvatar} 
                            height={30} 
                            width={30} 
                        />
                        <Link href='login'>
                            <span className='text-sm text-white'>ورود/عضویت</span>
                        </Link>
                    </div>
                    <div className='tickets relative mr-5 ml-10 group'>
                        <Link href='#'>
                            <FaRegCheckSquare color='white' size={25}/>
                        </Link>
                        <span className={`${styles.tooltip} hidden w-20 h-5 group-hover:absolute bottom-[100%] -right-6 group-hover:flex justify-center items-center rounded-xl text-black bg-white`}>
                            تیکت‌ها
                        </span>
                    </div>
                    <div className='shopping-cart'>
                        <Link href='#'>
                            <div className='relative'>
                                <BsCart3 size={25} className='text-white hover:text-gray-400'/>
                                <span className='absolute -top-1 -left-1 h-4 w-4 flex justify-center items-center rounded-full text-sm bg-red-600 text-white'>0</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
        <div className='py-3 border-b-[1px] border-slate-200 border-opacity-80'>
            <nav className='max-w-6xl mx-auto'>
                <ul className='flex justify-start items-center space-x-6 space-x-reverse'>
                        <li>
                            <div className='relative flex justify-start items-center space-x-1 space-x-reverse hover:text-[#FFD700] cursor-pointer group' onMouseOver={() => showSubmenu(0)} onMouseLeave={() => setIsHover(false)}>
                                <span>بازی‌ها</span>
                                <FaAngleDown size={15}/>
                                <div className={`w-[1200px] opacity-0 h-96 absolute -right-5 top-[150%] ${currentIndex === 0 ? display : 'hidden'} justify-between space-x-24 space-x-reverse bg-white text-black transition ease-in-out ${transition ? 'group-hover:opacity-100 group-hover:-translate-y-1' : ''} duration-1000 z-50`} onTransitionEnd={hideSubmenu}>
                                    <div className='h-full w-[1000px] flex flex-col'>
                                        <ul className='px-16 py-7 flex justify-start items-center space-x-[120px] space-x-reverse border-b-[1px] border-slate-200'>
                                            {submenu1Titles.map((title, key) => (
                                                <li key={key}>{title}</li>
                                            ))}
                                        </ul>
                                        <div className='pr-4 pt-5 flex justify-start space-x-24 space-x-reverse'>
                                            {submenu1Items.map((items, key1) => (
                                                <ul key={key1} className='space-y-1 text-sm'>
                                                    {items.map((item, key2) => (
                                                        <li key={key2}>
                                                            <Link href={item.path} className='hover:text-slate-400'>
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ))}
                                        </div>
                                        
                                    </div>
                                    <div className='h-full w-[400px]'>
                                        <Image
                                            src={uncharted} 
                                            height={500} 
                                            width={400} 
                                            className='w-full h-full'
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div href='#' className='relative flex justify-start items-center space-x-1 space-x-reverse hover:text-[#FFD700] cursor-pointer group'  onMouseOver={() => showSubmenu(1)} onMouseLeave={() => setIsHover(false)}>
                                <span>Credit & DLC</span>
                                <FaAngleDown size={15}/>
                                <ul className={`w-36 opacity-0 h-32 px-4 py-3 absolute -right-5 top-[150%] ${currentIndex === 1 ? display : 'hidden'} flex-col justify-start space-y-2 bg-white text-black transition ease-in-out ${transition ? 'group-hover:opacity-100 group-hover:-translate-y-1' : ''} duration-1000 z-50`} onTransitionEnd={hideSubmenu}>
                                    {submenu2Items.map((item, key) => (
                                        <li key={key}>
                                            <Link href='#'>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link href='#' className='flex justify-start items-center space-x-1 space-x-reverse hover:text-[#FFD700] group'>
                                <span>گیفت کارت</span>
                                <FaAngleDown size={15}/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex justify-start items-center space-x-1 space-x-reverse hover:text-[#FFD700] group'>
                                <span>خدمات</span>
                                <FaAngleDown size={15}/>
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hover:text-[#FFD700] group'>
                                <span>آموزش</span>
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex justify-start items-center space-x-1 space-x-reverse hover:text-[#FFD700] group'>
                                <span>تخفیف و پیشنهاد</span>
                                <FaAngleDown size={15}/>
                            </Link>
                        </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
