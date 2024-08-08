import React from 'react'

const ChatBodyCards = ({user, chatItem, recieverId}) => {
  return (
    <div className='overflow-hidden h-[518px] overflow-y-auto  scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-slate-100 px-6 py-5 border-r border-gray-50'>
        {/* sender mesage */}
        {
         recieverId && recieverId === chatItem?.recieverId && <div className='mb-2'>
          <div className='bg-white max-w-[420px] rounded-md p-4 text-xs sender-card drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eum modi veniam adipisci, est facere laboriosam ratione esse saepe sed facilis non reprehenderit! Corrupti aspernatur doloremque dolorum, nulla ducimus ullam.</div>
      </div> 
        }
        {/* sender message end */}
        {/* reciver message */}
        {
          user?._id &&  user?._id === chatItem?.senderId &&  <div className='mb-2 flex justify-end'>
            <div className='bg-[#d9fdd3] max-w-[420px] rounded-md p-4 text-xs reciver-card drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eum modi veniam adipisci, est facere laboriosam ratione esse saepe sed facilis non reprehenderit! Corrupti aspernatur doloremque dolorum, nulla ducimus ullam.</div>
        </div>
        }
       
        {/* reciver messageend */}
                
    </div>
  )
}

export default ChatBodyCards