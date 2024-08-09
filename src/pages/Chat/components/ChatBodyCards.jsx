import React, { useEffect, useRef } from "react";

const ChatBodyCards = ({ user, chatItem, recieverId, sendingMsg }) => {
    const bottomScroll = useRef(null);

    useEffect(() => {
        bottomScroll?.current.scrollIntoView({ behavior: "smooth" });
    }, [chatItem, sendingMsg]);

    return (
        <div className="overflow-hidden h-full overflow-y-auto scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-slate-100 px-6 py-5 border-r border-gray-50">
            {chatItem?.length > 0 &&
                chatItem?.map((chat, index) => {
                    const isSender = chat?.senderId === user?._id;
                    const isReceiver = recieverId === chat?.senderId;

                    if (!isSender) {
                        return (
                            <div key={index} className="mb-2">
                                <div className="bg-white max-w-[420px] inline-block rounded-md p-4 text-xs sender-card drop-shadow-sm shadow-sm text-slate-600">
                                    {chat?.message?.text}
                                </div>
                            </div>
                        );
                    } else if (isSender) {
                        return (
                            <div key={index} className="mb-2 flex justify-end">
                                <div className="bg-[#d9fdd3] max-w-[420px] inline-block rounded-md p-4 text-xs reciver-card drop-shadow-sm shadow-sm text-slate-600">
                                    {chat?.message?.text}
                                </div>
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            {sendingMsg && (
                <div className="mb-2 flex justify-end">
                    <div className="bg-[#e1f3de] w-[250px] rounded-md p-2 text-xs reciver-card drop-shadow-sm shadow-sm text-slate-600">
                        <div className="h-[6px] w-full bg-gray-300 animate-pulse mb-2"></div>
                        <div className="h-[6px] w-full bg-gray-300 animate-pulse mb-2"></div>
                        <div className="h-[6px] w-full bg-gray-300 animate-pulse mb-2"></div>
                        <div className="h-[6px] w-full bg-gray-300 animate-pulse mb-2"></div>
                    </div>
                </div>
            )}
            <div ref={bottomScroll} />
        </div>
    );
};

export default ChatBodyCards;
