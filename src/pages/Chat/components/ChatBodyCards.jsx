import React from 'react'

const ChatBodyCards = () => {
  return (
    <div className='overflow-hidden h-[518px] overflow-y-auto  scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-slate-100 px-6'>
        {/* sender mesage */}
        <div className='mb-2'>
            <div className='bg-white max-w-[420px] rounded-md p-4 text-xs sender-card drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eum modi veniam adipisci, est facere laboriosam ratione esse saepe sed facilis non reprehenderit! Corrupti aspernatur doloremque dolorum, nulla ducimus ullam.</div>
        </div>
        <div className='mb-2 flex'>
            <div className='bg-white max-w-[420px] rounded-md p-4 text-xs drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor sit </div>
        </div>
        {/* sender message */}
        {/* reciver message */}
        <div className='mb-2 flex justify-end'>
            <div className='bg-[#d9fdd3] max-w-[420px] rounded-md p-4 text-xs reciver-card drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eum modi veniam adipisci, est facere laboriosam ratione esse saepe sed facilis non reprehenderit! Corrupti aspernatur doloremque dolorum, nulla ducimus ullam.</div>
        </div>
        <div className='mb-2 flex justify-end'>
            <div className='bg-[#d9fdd3] max-w-[420px] rounded-md p-4 text-xs drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor</div>
        </div>
        {/* reciver message */}
        {/* sender mesage */}

        <div className='mb-2'>
            <div className='bg-white max-w-[420px] rounded-md p-4 text-xs sender-card drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eum modi veniam adipisci, est facere laboriosam ratione esse saepe sed facilis non reprehenderit! Corrupti aspernatur doloremque dolorum, nulla ducimus ullam.</div>
        </div>
        <div className='mb-2 flex'>
            <div className='bg-white max-w-[420px] rounded-md p-4 text-xs drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor sit </div>
        </div>
                {/* reciver message */}
                <div className='mb-2 flex justify-end'>
            <div className='bg-[#d9fdd3] max-w-[420px] rounded-md p-4 text-xs reciver-card drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quas? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eum modi veniam adipisci, est facere laboriosam ratione esse saepe sed facilis non reprehenderit! Corrupti aspernatur doloremque dolorum, nulla ducimus ullam.</div>
        </div>
        <div className='mb-2 flex justify-end'>
            <div className='bg-[#d9fdd3] max-w-[420px] rounded-md p-4 text-xs drop-shadow-sm shadow-sm text-slate-600'>Lorem ipsum dolor</div>
        </div>
        {/* reciver message */}
    </div>
  )
}

export default ChatBodyCards