import React from 'react'
import Link from 'next/link'
import { FaInfo, FaPhone, FaRegEdit, FaQuestion, FaClipboardList } from 'react-icons/fa';
export const Footer = () => {
  return (
    <footer>
        <div className='max-w-[1000px] mx-auto flex justify-between'>
            <div className='flex justify-between space-x-16 space-x-reverse'>
                <div className='flex flex-col justify-start items-start space-y-4'>
                    <h1 className='text-lg font-bold'>تماس با ما</h1>
                    <Link href='#' className='flex justify-start items-center space-x-2 space-x-reverse'>
                        <FaInfo size={15}/>
                        <span className='text-sm text-[#737373]'>درباره ما</span>
                    </Link>
                    <Link href='#' className='flex justify-start items-center space-x-2 space-x-reverse'>
                        <FaPhone size={15}/>
                        <span className='text-sm text-[#737373]'>تماس با ما</span>
                    </Link>
                    <Link href='#' className='flex justify-start items-center space-x-2 space-x-reverse'>
                        <FaRegEdit size={15}/>
                        <span className='text-sm text-[#737373]'>ثبت شکایات</span>
                    </Link>
                </div>
                <div className='flex flex-col justify-start space-y-4'>
                    <h1 className='text-lg font-bold'>پرسش های متداول</h1>
                    <Link href='#' className='flex justify-start items-center space-x-2 space-x-reverse'>
                        <FaQuestion size={15}/>
                        <span className='text-sm text-[#737373]'>پرسش‌های متداول</span>
                    </Link>
                    <Link href='#' className='flex justify-start items-center space-x-2 space-x-reverse'>
                        <FaClipboardList size={15}/>
                        <span className='text-sm text-[#737373]'>قوانین و مقررات</span>
                    </Link>
                </div>
                <div className='flex flex-col justify-start space-y-4'>
                    <h1 className='text-lg font-bold'>محصول مورد نظر خود را نیافتید؟</h1>
                    <Link href='#' className='flex justify-start items-center space-x-2 space-x-reverse'>
                        <span className='text-sm text-[#737373]'>از طریق چت سایت یا تیکت با ما مطرح نمایید</span>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col justify-between items-center'> 
                <span>با ما همراه باشید</span>
                <div>
                    
                </div>
            </div>
        </div>
    </footer>
  )
}
