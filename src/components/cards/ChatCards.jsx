import React from 'react'

const ChatCards = () => {
  return (
    <div className='h-[510px] w-full overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-slate-100 overflow-y-scrol'>
    {
        [...Array(10)].map((_, i) => <div key={i} className="grid grid-cols-12 items-center p-3 cursor-pointer hover:bg-slate-200 duration-500 transition-all">
        <div className='w-10 col-span-2'>
            <img width={30} className='ring rounded-full ring-indigo-700' src="/images/3541871.png" alt="" />
        </div>
        <div className='grid grid-cols-12 gap-1 col-span-10 border-b pb-2'>
            <div className='col-span-9'>
                <h2 className='text-sm font-semibold text-gray-500'>Designers Corner</h2>
                <p className='text-xs '>+2348128225157: That’s a great news!...</p>
            </div>
            <div className='grid grid-cols-1 col-span-3'>
            <span className='text-xs text-gray-400'>3:11 am</span>
            <button className='bg-green-400 rounded-xl text-sm text-gray-800'>197</button>
            </div>
        </div>
            
    </div>)
    }
</div>
  )
}

export default ChatCards