import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../assets/lottie/female-creative-artist-with-ideas.json";

const EmptyChat = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <div className="overflow-hidden h-[518px] overflow-y-auto  scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-slate-100 px-6 py-5 border-r border-gray-50 flex justify-center items-center">
            <div>
                <Lottie options={defaultOptions} height={200} width={200} />
            </div>
        </div>
    );
};

export default EmptyChat;
