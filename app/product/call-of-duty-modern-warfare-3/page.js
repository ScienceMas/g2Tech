'use client';
import Image from "next/image";
import Link from "next/link";
import mw3 from '@/public/assets/images/Call-of-Duty-Modern-Warfare-III-G2Techshop-1.webp';
import chat from '@/public/assets/images/chat.jpg';
import styles from '@/public/assets/styles/ProductDetails.module.css';
import { LiaSearchSolid, LiaAngleDownSolid } from 'react-icons/lia';
import { RxCross1 } from 'react-icons/rx';
import { useEffect, useState } from "react";
import { Variations } from "@/components/Variations";
export default function ProductDetails({details={img: mw3, name: 'Call of Duty: Modern Warfare III', low: 3973000, high: 6943500}}) {

    const [show, setShow] = useState(false);
    const [isDropdownShow, setIsDropdownShow] = useState(false);
    const [idx, setIdx] = useState(null);
    const [selectedDropItems, setSelectedDropItems] = useState(['یک گزینه را انتخاب کنید', 'یک گزینه را انتخاب کنید', 'یک گزینه را انتخاب کنید']);
    const showImage = () => {
        setShow(true);
    }

    const hideImage = () => {
        setShow(false);
    }


    return(
        <>
            <div className="pr-10">
                <div className="max-w-[1050px] mx-auto my-5 text-sm sm:text-base">
                    <Link href='#' className="text-[#BF751C]">
                        خانه
                    </Link>
                    <span className="text-xl">
                        /
                    </span>
                    <Link href='#' className="text-[#BF751C]">
                        Game
                    </Link>
                    <span className="text-xl">
                        /
                    </span>
                    <Link href='#' className="text-[#BF751C]">
                        Steam
                    </Link>
                    <span className="text-xl">
                        /
                    </span>
                    <span>
                      {details.name}
                    </span>
                </div>
            </div>
            <div className="px-4 grid grid-flow-row grid-cols-1 gap-3">
                <div className="col-span-1 grid grid-flow-row grid-cols-1 border-[1px] rounded-[4px] pt-6 pb-5 px-8">
                    <div className="relative">
                        <Image
                            src={mw3} 
                            height={500} 
                            width={400}
                            className="w-full h-auto"
                        />
                        <div className="absolute w-10 h-10 top-5 left-5 rounded-full bg-white flex justify-center place-items-center">
                            <LiaSearchSolid size={25} className="cursor-pointer" onClick={showImage}/>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <h1 className="mt-8 mb-5 text-xl">مشخصات</h1>
                        <div className={`mr-10 mb-4 text-sm space-y-5 ${styles.details}`}>
                            <div>پلتفرم: <strong>Steam-Battle.net</strong></div>
                            <div>سال انتشار: Nov 10, <Link href='#' className="text-[#020160]">2023</Link></div>
                            <div>سازنده-ناشر: <Link href='#' className="text-[#020160]">Sledgehammer Games</Link>-<Link href='#' className="text-[#020160]">Treyarch</Link>-<Link href='#' className="text-[#020160]">Infinity Ward</Link>-<Link href='#' className="text-[#020160]">Infinity Ward</Link>-<Link href='#' className="text-[#020160]">Activision</Link></div>
                            <div>ویژگی ها: <Link href='#' className="text-[#020160]">Cross Platform Multiplayer</Link>-<Link href='#' className="text-[#020160]">Online PvP</Link>-<Link href='#' className="text-[#020160]">Online Co-op</Link>-<Link href='#' className="text-[#020160]">Single player</Link>-<Link href='#' className="text-[#020160]">Action</Link></div>
                            <div>مجموعه: <Link href='#' className="text-[#020160]">Call of Duty</Link>-<Link href='#' className="text-[#020160]">Warzone 2</Link></div>
                            <div><span className="text-[#800080]">خرید از بتل نت: </span>هنگام خرید <span className="text-[#ff6600]">ایمیل</span> و <span className="text-[#ff6600]">رمز عبور</span> <strong>بتل نت </strong>خود را وارد نمایید.</div>
                            <div>پس از ثبت سفارش <strong>بتل نت</strong>، جهت ارسال <span className="text-[#ff6600]">کد ورود </span>در <strong>چت سایت </strong><Image src={chat} height={30} width={30} className="inline-block ml-1 mb-4"/>در دسترس باشید. </div>
                            <div><span className="text-[#800080]">خرید از استیم: </span>هنگام خرید <span className="text-[#ff6600]">نام کاربری</span> و <span className="text-[#ff6600]">رمز عبور</span> <strong>استیم </strong>خود را وارد نمایید.</div>
                            <div><strong>استیم گارد </strong>خود را <span className="text-[#ff6600]">غیر فعال </span>نمایید. <Link href='#' className="text-[#020160]">آموزش</Link></div>
                            <div><Link href='#' className="text-[#020160]">راهنما!؟</Link></div>
                        </div>
                        <div className="w-full h-fit min-h-[150px] pt-4 pr-3 border-[1px] rounded-[3px] space-y-3 text-sm bg-[#f9f9f9] border-[#eaeaea]">
                            <span className="block text-[#020160]"><Link href='#'>خرید سی پی کالاف دیوتی- CP وارزون 2- CP مدرن وار فار 2</Link></span>
                            <span className="block text-[#020160]"><Link href='#'>کالکشن بازی call of duty- خرید پک های بازی کالاف دیوتی</Link></span>
                            <span className="block text-[#737373]">تحویل فوری در تمامی ریجن ها</span>
                        </div>

                    </div>
                </div>
                <div className="col-span-1 border-[1px] rounded-[4px] pt-5 pr-8 pl-6">
                    <h1 className="mb-5 text-center text-xl text-[#4B4B4B]">{details.name}</h1>
                    <h1 className="text-center text-[#575656]">{details.low.toLocaleString('en-us')}تومان - {details.high.toLocaleString('en-us')}تومان</h1>
                    <Variations 
                        menus={[
                            {
                            title: 'پلتفرم', 
                            items: ['یک گزینه را انتخاب کنید', 'Steam', 'Battle Net'],
                            }, 
                            {
                            title: 'نسخه بازی', 
                            items: ['یک گزینه را انتخاب کنید', 'Steam', 'Battle Net'],
                            }, 
                            {
                            title: 'ریجن', 
                            items: ['یک گزینه را انتخاب کنید', 'Steam', 'Battle Net'],
                            }, 
                        ]}
                    />
                    <div className="mt-5 flex items-center justify-center space-x-6 space-x-reverse">
                        <input type="number" className="w-14 py-2 text-sm text-center border-[1px] rounded-xl " min={1} defaultValue={1}/>
                        <button type="button" className="py-2 px-10 text-center bg-[#fddc99] rounded-[10px]">افزودن به سبد خرید</button>
                    </div>
                </div>
            </div>
            <div className={`${show ? 'flex items-center justify-center z-[100]' : 'hidden'} fixed top-0 w-full h-full bg-black`}>
                <Image
                    src={details.img}
                    height={400} 
                    width={300}
                />
                <RxCross1 size={20} className="absolute top-5 right-5 cursor-pointer text-white hover:opacity-75" onClick={hideImage}/>
            </div>

        </>
    )
}