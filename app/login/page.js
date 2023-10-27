'use client';
import { useState, useRef } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import styles from '@/public/assets/styles/Login.module.css';
import Link from 'next/link';
import { BsExclamation, BsFillTriangleFill } from 'react-icons/bs';
import Image from 'next/image';
export default function Login() {
    const [idx, setIdx] = useState(0);
    const [page, setPage] = useState(0);
    const inputElement = useRef();
    const nameInput = useRef()
    const surenameInput = useRef();
    const emailInput = useRef();
    const passInput = useRef();
    const [error, setError] = useState(false);
    const changeIdx = (key) => {
        setIdx(key);
    }

    const changePage = (page) => {
        setPage(page);
    }

    const checkInfo = (e) => {
        if (!inputElement.current.value){
            e.preventDefault();
            setError(true);
        }
    }

    const checkRegisterInfo = (e) => {
        if (!nameInput.current.value || !surenameInput.current.value || !emailInput.current.value || !passInput.current.value){
            e.preventDefault();
            setError(true);
        }
    }

    const removeError = () => {
        setError(false);
    }

    const gotoPrevPage = () => {
        history.back();
    }
    return(
        <>
            <RxCross1 size={25} className='absolute top-6 right-6 text-red-500 cursor-pointer' onClick={gotoPrevPage}/>
            <div className='w-full h-full flex items-center justify-center'>
                <div className={`w-[400px] mx-[10px] ${page === 0 ? 'block' : 'hidden'}`}>
                    <h1 className="mb-10 text-3xl font-bold text-black">ورود</h1>
                    <div className="mb-6 flex justify-start space-x-5 space-x-reverse text-sm">
                        <span className={`pb-2 cursor-pointer ${idx === 0 ? 'text-black border-b-2 border-black' : 'text-[#bbbbbb]'}`} onClick={() => changeIdx(0)}>استفاده از موبایل</span>
                        <span className={`pb-2 cursor-pointer ${idx === 1? 'text-black border-b-2 border-black' : 'text-[#bbbbbb]'}`} onClick={() => changeIdx(1)}>استفاده از آدرس ایمیل</span>
                    </div>
                    <form method='get' action='#'>
                        <input type="text" className= "h-[50px] w-full px-3 py-2 mb-6 block rounded-[4px] bg-[#F8F8F8] focus:border-2 focus:border-[#9CF5FF] focus:outline-none" dir={`${idx === 0 ? 'ltr' : 'rtl'}`} placeholder={`${idx === 0 ? '9123456789' : 'آدرس ایمیل'}`} ref={inputElement} required/>
                        <label className={`${styles.container}`}>
                            <input type="checkbox" className={`${styles.checkbox}`}/>
                            <span className={`${styles.checkmark}`}></span>
                            <span className='mr-10 text-sm'>مرا به خاطر بسپار</span>
                        </label>
                        <button type="submit" className="h-[50px] w-full mt-4 flex justify-center items-center space-x-2 space-x-reverse bg-[#1C2434] text-white rounded-[4px]" onClick={e => checkInfo(e)}>
                            <AiOutlineArrowLeft className='text-slate-500'/>
                            <span>ادامه</span>
                        </button>
                    </form>
                    <h1 className='mt-8 text-lg text-[#d6d6d6]'>
                        آیا هنوز عضو نیستید؟
                        <Link href='#' className='mr-2 text-black font-bold' onClick={() => changePage(1)}>
                            اکنون عضو شوید
                        </Link>
                    </h1>
                </div>
                <div className={`w-[400px] mx-[10px] ${page === 1 ? 'block' : 'hidden'}`}>
                    <h1 className="mb-10 text-3xl font-bold text-black">عضویت</h1>
                    <form method='get' action='#'>
                        <input type="text" className= "h-[50px] w-full px-3 py-2 mb-6 block rounded-[4px] bg-[#F8F8F8] focus:border-2 focus:border-[#9CF5FF] focus:outline-none" dir='rtl' placeholder='نام*' ref={nameInput} required/>
                        <input type="text" className= "h-[50px] w-full px-3 py-2 mb-6 block rounded-[4px] bg-[#F8F8F8] focus:border-2 focus:border-[#9CF5FF] focus:outline-none" dir='rtl' placeholder='نام خانوادگی*' ref={surenameInput} required/>
                        <input type="text" className= "h-[50px] w-full px-3 py-2 mb-6 block rounded-[4px] bg-[#F8F8F8] focus:border-2 focus:border-[#9CF5FF] focus:outline-none" dir='rtl' placeholder='نام کاربری'/>
                        <input type="text" className= "h-[50px] w-full px-3 py-2 mb-6 block rounded-[4px] bg-[#F8F8F8] focus:border-2 focus:border-[#9CF5FF] focus:outline-none" dir='rtl' placeholder='آدرس ایمیل*' ref={emailInput} required/>
                        <input type="text" className= "h-[50px] w-full px-3 py-2 mb-6 block rounded-[4px] bg-[#F8F8F8] focus:border-2 focus:border-[#9CF5FF] focus:outline-none" dir='ltr' placeholder='9123456789'/>
                        <input type="text" className= "h-[50px] w-full px-3 py-2 mb-6 block rounded-[4px] bg-[#F8F8F8] focus:border-2 focus:border-[#9CF5FF] focus:outline-none" dir='rtl' placeholder='رمز*' ref={passInput} required/>
                        <button type="submit" className="h-[50px] w-full mt-4 flex justify-center items-center space-x-2 space-x-reverse bg-[#1C2434] text-white rounded-[4px]" onClick={e => checkRegisterInfo(e)}>
                            <AiOutlineArrowLeft className='text-slate-500'/>
                            <span>ادامه</span>
                        </button>
                    </form>
                    <h1 className='mt-8 text-lg text-[#d6d6d6]'>
                        قبلا عضو شده‌اید؟
                        <Link href='#' className='mr-2 text-black font-bold' onClick={() => changePage(0)}>
                            اکنون وارد شوید
                        </Link>
                    </h1>
                </div>
            </div>
            <div className={`absolute py-5 top-[40px] ${!error ? 'left-[100%]' : ''} w-[300px] flex justify-between items-center space-x-3 space-x-reverse bg-[#fff0f5] rounded-xl border-[1px] border-[#FE004D1A] ${error ? styles.error : ''}`}>
                <div className='relative h-full w-[25%]'>
                    <BsFillTriangleFill size={32} className='absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 text-[#fe004d29]'/>
                    <BsExclamation size={15} className='absolute top-1/2 right-1/2 -translate-y-[40%] translate-x-1/2 text-red-500'/>
                </div>
                <div>
                    <h1 className='text-xl text-red-500'>خطا!</h1>
                    <span className='text-lg text-[#6E0021]'>لطفا تمام مشخصات مورد نیاز را پر کنید.</span>
                </div>
                <RxCross1 size={12} className='absolute top-3 left-3 text-red-500 cursor-pointer' onClick={removeError}/>
            </div>
        </>
    )
}