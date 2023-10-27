'use client';
import React from 'react';
import { useState } from 'react';
import { LiaAngleDownSolid } from 'react-icons/lia';
export const Dropdown = ({menu=[], tailwindStyle='', style={}, onOpen=f=>f, isOpen=false}) => {
    
    const [dropIndex, setDropIndex] = useState(0);
    const handleDropIndex = (index) => {
        setDropIndex(index);
    }

  return (
    <div className={`dropdown relative w-full py-2 px-4 text-center bg-[#f3f3f3] rounded-[6px] border-[1px] border-[#d1d1d1] cursor-default ${tailwindStyle}`} onClick={onOpen} style={style}>
        <span className='dropdownText text-sm whitespace-nowrap'>{menu[dropIndex]}</span>
        <div className='dropdownIconWrapper absolute h-full w-10 top-1/2 left-0 -translate-y-1/2 flex items-center justify-center bg-[#f3f3f3]'>
            <LiaAngleDownSolid size={15} className='dropdownIcon'/>
        </div>
        {isOpen ? (
            <ul className='absolute h-fit w-full p-1 top-full right-0 bg-[#f3f3f3] rounded-[4px] border-[1px] border-[#d1d1d1] z-50'>
                {menu.map((menuItem, index) => (
                    <li key={index} className='p-1 text-sm bg-[#eeeeee] hover:bg-[#e6e6e6]' onClick={() => handleDropIndex(index)}>
                        {menuItem}
                    </li>
                ))}
            </ul>
        ) : null}
    </div>
  )
}
