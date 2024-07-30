import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCRUD } from "../../hooks/useCrud";
import { getData } from "../../utils/apiCore";
import BeatLoader from "react-spinners/BeatLoader";

const TokenActivation = () => {
    const { api, isLoading, getMutation, handlePOST, warn, success } =
        useCRUD();
    const [error, setError] = useState(null);
    const [msg, setMsg ] = useState(null);
    const navigate = useNavigate();
    const { token } = useParams();
    const activateAccount = async () => {
        try {
            const response = await getData({
                url: `${api.tokenActivation}/${token}`,
            });
            if (response.statusCode == 200) {
                success("Account Activation Success!");
                navigate("/login");
                setMsg("Activation Success!")
            } else {
                warn("Invalid Token!");
                setError("Something Wrong!")
                navigate("/login");
            }
        } catch (error) {
            console.log(error);
            setError("Something Wrong!")
            navigate("/login");
        }
    };
    useEffect(() => {
        activateAccount();
    }, []);

    console.log(error);
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="">
                <div className="bg-gray-300 rounded-md w-[550px] min-h-[350px] p-5 flex justify-center items-center">
                    <div>
                        {error ? (
                            <>
                                <h1 className="text-center text-2xl font-bold">
                                    {error}
                                </h1>
                            </>
                        ) : msg ? (
                            <h2>{msg}</h2>
                        ) : (
                            <>
                                <h1 className="text-center text-2xl font-bold">
                                    Activate Your Account
                                </h1>
                                <div className="flex justify-center">
                                    <BeatLoader color="#2db53f" />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenActivation;
