import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaUsers } from 'react-icons/fa'
import { IoFilterSharp } from 'react-icons/io5'
import { MdChat } from 'react-icons/md'
import { RiLoader3Line } from 'react-icons/ri'

const SideTopbar = () => {
  return (
    <>
    
    <div className='h-[120px]'> 
             <div className="grid grid-cols-2 items-center bg-[#F0F2F5] p-3 h-[52px]">
                <div>   
                    <img width={30} className='ring rounded-full ring-indigo-700' src="/images/3541871.png" alt="" />

                </div>
                <div className='flex justify-end gap-x-4'>
                <FaUsers  className='text-2xl text-[#4e4e4f] cursor-pointer hover:text-black'/>
                <RiLoader3Line  className='text-2xl text-[#4e4e4f] cursor-pointer hover:text-black'/>
                <MdChat  className='text-2xl text-[#4e4e4f] cursor-pointer hover:text-black'/>
                </div>
            </div>
            {/* search items */}
            <div className="p-3">
                <div className="flex justify-between items-center gap-x-3">
                   <div className='px-3 py-3 bg-slate-100 rounded-md w-full flex items-center gap-x-2'>
                   <CiSearch className='text-xl'/>
                   <input type="search" placeholder='Search or start new chat' className='h-full bg-transparent w-full outline-none' />
                   </div>
                    <IoFilterSharp className='text-xl cursor-pointer hover:text-black'/>
                </div>
            </div>
             </div>
    </>
  )
}

export default SideTopbar