'use client';
import React, { useEffect, useState } from 'react';
import { Dropdown } from './Dropdown';
export const Variations = ({menus=[]}) => {
    const [currentIndex, setCurrentIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = (index) => {
        if (isOpen && currentIndex === index) {
            setIsOpen(false);
        }else {
            setIsOpen(true);
        }
        setCurrentIndex(index);
    }
    useEffect(() => {
        window.onclick = function(e){
            if(!e.target.matches('.dropdown') && !e.target.matches('.dropdownText') && !e.target.matches('.dropdownIconWrapper') && !e.target.matches('.dropdownIcon')){
                setCurrentIndex(null);
            }
        }
    })
  return (
    <table className='w-full text-sm font-normal table-auto'>
        <tbody>
            {menus.map((menu, index) => (
                <tr className='py-5'>
                    <td className='py-5'>{menu.title}</td>
                    <td className='py-5'><Dropdown menu={menu.items} onOpen={() => handleOpen(index)} isOpen={currentIndex === index && isOpen}/></td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}
