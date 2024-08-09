import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { IoFilterSharp } from 'react-icons/io5'
import { useGlobalStore } from '../../store/globalStore'
import ChatCards from '../cards/ChatCards'

const AddChat = ({handleCloseNewChat,showNewChat, onClickCard}) => {
    const {user} = useGlobalStore()

  return (
    <div className={`absolute top-0 right-0 bottom-0 p-3 bg-white transition-all duration-700 ${showNewChat === true ? "left-0 z-10 opacity-100" : "left-[-10000px] -z-50 opacity-0"}`}>
        <div className='pt-[60px]'>
            <div className='mb-3'>
                <button className='flex items-center gap-2 text-black font-semibold' onClick={handleCloseNewChat}>
                <span>
                    <BsArrowLeft/>
                </span>
                <span>New Chat</span>
                </button>
            </div>
            <div className="">
                <div className="flex justify-between items-center gap-x-3">
                   <div className='px-3 py-3 bg-slate-100 rounded-md w-full flex items-center gap-x-2'>
                   <CiSearch className='text-xl'/>
                   <input type="search" placeholder='Search or start new chat' className='h-full bg-transparent w-full outline-none' />
                   </div>
                </div>
                <div>
                <ChatCards onClickHandler={onClickCard} bio users={user?.users}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddChat