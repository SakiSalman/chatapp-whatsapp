import React from 'react'
import { IoIosCall,IoMdVideocam } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { BiDotsVerticalRounded } from "react-icons/bi";
const BodyTopBar = () => {
  return (
    <>
     <div className='flex justify-between items-center bg-[#F0F2F5] px-4 py-3'>
        <div className='flex items-center gap-x-2'>
            <img width={30} className='ring rounded-full ring-indigo-700' src="/images/3541871.png" alt="" />
            <h3>Daniel Kalio</h3>
        </div>
        <div className='flex justify-end gap-4 text-2xl text-slate-500'>
             <IoIosCall  className='cursor-pointer hover:text-black duration-500 transition-all'/>
             <IoMdVideocam  className='cursor-pointer hover:text-black duration-500 transition-all'/>
             <CiSearch  className='cursor-pointer hover:text-black duration-500 transition-all'/>
             <BiDotsVerticalRounded  className='cursor-pointer hover:text-black duration-500 transition-all'/>
        </div>
     </div>
    
    </>
  )
}

export default BodyTopBar