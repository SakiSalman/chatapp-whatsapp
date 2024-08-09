import SideTopbar from "./components/SideTopbar";
import ChatCards from "../../components/cards/ChatCards";
import BodyTopBar from "./components/BodyTopBar";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { HiMiniMicrophone } from "react-icons/hi2";
import { IoSendSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import ChatBodyCards from "./components/ChatBodyCards";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
import CheckOutsideClick from "../../components/checkoutsideClick/CheckOutsideClick";
import { getData } from "../../utils/apiCore";
import { useCRUD } from "../../hooks/useCrud";
import { useGlobalStore } from "../../store/globalStore";
import { RiChatNewLine } from "react-icons/ri";
import AddChat from "../../components/all-users/AddChat";
import EmptyChat from "./components/EmptyChat";
const Chat = () => {
    const {handlePOST, api, warn,postFormMutation, postMutation, getMutation}=useCRUD()
    const {user, chats,setChats,recieverId,setReceiverId} = useGlobalStore()
    const [activeChats, setActiveChats] = useState([])
    const [showNewChat, setShowNewChat] = useState(false)
    const [showImoji, setShowImoji] = useState(false);
    const [message, setMessage] = useState('')
    const [sendingMsg, setSendingMsg] = useState(false)
    const handleClearChat = () => {
        setMessage('')
    }
    const handleImojiClick = (e) => {
        const newMessage = message + e.emoji
        setMessage(newMessage)
    };
    const handleCloseNewChat= () => {
        setShowNewChat(false)
    }
    const handleOpenNewChat= () => {
        console.log("trigered");
        setShowNewChat(true)
    }    

    const handleSendMessage  = async (e) => {
        if (!message || message === "") {
            return warn("No Message Found!")
        }
        setSendingMsg(true)
        const rs = await handlePOST({
            url : api.chats.createChat,
            requiredFields : [],
            body : {
                message : message,
                receiverId : recieverId
            },
            mutation : postMutation,
            token : user?.token
        })           
        if (rs?.data?.length > 0) {            
            setActiveChats(rs?.data)
            handleClearChat()
        }   
        setSendingMsg(false)
    }
    const onClickCard = async(users) =>{        
        setReceiverId(users?._id)
        const rs = await getData({
            url : `${api.chats.createChat}/${users?._id}`,
            token:user?.token
        })
        if (rs?.statusCode === 200 && rs?.chat?.length > 0) {            
            setActiveChats(rs?.chat)
        }else{
            setActiveChats([]) 
        }           
    }

    console.log(activeChats);
    
    return (
        <div className="w-full h-full grid grid-cols-12 overflow-hidden rounded-md z-50">
            <div className="bg-white col-span-4 relative">
                <div>
                    {/* top nav */}
                    <SideTopbar showNewChat={showNewChat} handleOpenNewChat={handleOpenNewChat}/>
                    {/* message cards */}
                    <ChatCards users={user?.users}/>
                    <AddChat onClickCard={onClickCard} showNewChat={showNewChat} handleCloseNewChat={handleCloseNewChat}/>
                </div>
            </div>
            <div className="col-span-8">
                <div className="h-[52px]">
                    {/* body top bar */}
                    <BodyTopBar />
                </div>
                {/* chat body */}
                <div className="h-[500px] overflow-hidden">
                {
                    recieverId && activeChats?.length > 0 ? <ChatBodyCards sendingMsg={sendingMsg} chatItem={activeChats} receiverId={recieverId} user={user}/> : <EmptyChat/>
                }
                </div>
                {/* chat body bottom bar */}
                <div className={`h-[60px] bg-[#F0F2F5] p-3 items-center ${!recieverId ? "pointer-events-none" : ""}`}>
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-1 flex justify-between items-center relative">
                            <CheckOutsideClick
                                onClickOutside={() => setShowImoji(false)}
                            >
                                {showImoji && (
                                    <div className="absolute bottom-0 z-[99999]">
                                        <EmojiPicker
                                            height={430}
                                            width={350}
                                            onEmojiClick={(e) =>
                                                handleImojiClick(e)
                                            }
                                        />
                                    </div>
                                )}
                            </CheckOutsideClick>
                            <BsEmojiSmile
                                className="cursor-pointer"
                                onClick={() => setShowImoji(true)}
                            />
                            <GrAttachment className="cursor-pointer" />
                        </div>
                        <div className="col-span-10 bg-white py-2 px-3">
                            <div className="flex items-center gap-3">
                                <FaCamera />
                                <input
                                    onChange={(e) => setMessage(e.target.value)}
                                    type="text"
                                    value={message}
                                    placeholder="Type a message"
                                    className="w-full bg-transparent outline-none"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 flex items-center gap-x-2">
                            <HiMiniMicrophone className="cursor-pointer" />
                            <IoSendSharp onClick={(e) => handleSendMessage(e)} className="cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
