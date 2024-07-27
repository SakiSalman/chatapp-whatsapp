import SideTopbar from './components/SideTopbar';
import ChatCards from '../../components/cards/ChatCards';
import BodyTopBar from './components/BodyTopBar';
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { HiMiniMicrophone } from "react-icons/hi2";
import { IoSendSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import ChatBodyCards from './components/ChatBodyCards';
const Chat = () => {
  return (
    <div className='w-full h-full grid grid-cols-12 overflow-hidden rounded-md'>
        <div className='bg-white col-span-4'>
           <div>
             {/* top nav */}
             <SideTopbar/>
            {/* message cards */}
            <ChatCards/>
           </div>
        </div>
        <div className='col-span-8'>
            <div className='h-[52px]'>
                {/* body top bar */}
                    <BodyTopBar/>
            </div>
            {/* chat body */}
            <div>
                {/* chat body */}
                <ChatBodyCards/>
            </div>
            {/* chat body bottom bar */}
            <div className='h-[60px] bg-[#F0F2F5] p-3 items-center'>
                <div className="grid grid-cols-12 gap-4 items-center">
                    <div className='col-span-1 flex justify-between items-center'>
                        <BsEmojiSmile className='cursor-pointer'/>
                        <GrAttachment className='cursor-pointer'/>
                    </div>
                    <div className='col-span-10 bg-white py-2 px-3'>
                        <div className='flex items-center gap-3'>
                            <FaCamera />
                            <input type="text" placeholder='Type a message'  className='w-full bg-transparent outline-none'/>
                        </div>
                    </div>
                    <div className='col-span-1 flex items-center gap-x-2'>
                        <HiMiniMicrophone className='cursor-pointer'/>
                        <IoSendSharp className='cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Chat