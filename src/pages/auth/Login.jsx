import React, { useState } from "react";
import { useCRUD } from "../../hooks/useCrud";
import { useGlobalStore } from "../../store/globalStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, setUser, loading}= useGlobalStore()
    const navigate = useNavigate()
  const requiredFieldsLogin  = [
    {
      key : "email",
      name : "Email",
    },
    {
      key : "password",
      name : "Password"
    }
  ]
  const requiredFields  = [
    {
      key : "name",
      name : "Name"
    },
    {
      key : "email",
      name : "Email",
    },
    {
      key : "password",
      name : "Password"
    }
  ]
  const {api, isLoading, postMutation, handlePOST, warn} = useCRUD()
    const [registerFields, setRegisterFields] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [loginFiels, setLoginFiels] = useState({
        email: "",
        password: "",
    });
    const [login, setLogin] = useState(false);

    const onChange = (e, setForm) => {
        e.preventDefault();
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmitLogin = async() => {
        try {
            const res =  await handlePOST(
                {
                  body : loginFiels,
                  requiredFields : requiredFieldsLogin,
                  url : api.login,
                  mutation : postMutation
                }
          
               )
            if (res?.statusCode === 200 && res?.user?._id) {
                const token = res?.user?.token
                localStorage.setItem("token", token)
                setUser(res.user)
                navigate('/chat')
             }
        } catch (error) {
            warn("Server Error!")
            console.log('error', error)
        }
        
    }
    const handleSubmit = async () => {
     const res =  await handlePOST(
      {
        body : registerFields,
        requiredFields,
        url : api.register,
        mutation : postMutation
      }

     )
     if (res.statusCode === 200 && res.data) {
        const token = res.data.token
        localStorage.setItem("activatioToken", token)
        localStorage.setItem("activationEmail", res.data.email)
        navigate('/activation')
        setUser(res.data)
     }
    }
    return (
        <div className="w-full">
            {!login && (
                <div className="mx-auto flex items-center flex-col">
                    <h2 className="text-center text-3xl font-medium mb-4">
                        Login
                    </h2>
                    <div className="bg-[#fff] w-full md:w-96 rounded-md shadow-md flex flex-col items-center p-8 gap-2">
                        <input
                            onChange={(e) => onChange(e, setLoginFiels)}
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                            className="w-full p-3 border border-green-600 rounded-md outline-none"
                        />
                        <input
                            onChange={(e) => onChange(e, setLoginFiels)}
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="w-full p-3 border border-green-600 rounded-md outline-none"
                        />
                        <button
                            onClick={handleSubmitLogin}
                            className="w-full p-3 bg-green-500 rounded-md border border-green-500 text-white hover:bg-white hover:text-green-600 transition-all duration-500"
                        >
                            Login
                        </button>
                        <p>
                            Don't have account yet?{" "}
                            <button
                                className="text-green-600 font-medium hover:text-green-700"
                                onClick={() => setLogin(true)}
                            >
                                Register
                            </button>
                        </p>
                    </div>
                </div>
            )}
            {login && (
                <div className="mx-auto flex items-center flex-col">
                    <h2 className="text-center text-3xl font-medium mb-4">
                        Register
                    </h2>
                    <div className="bg-[#fff] w-full md:w-96 rounded-md shadow-md flex flex-col items-center p-8 gap-2">
                        <input
                            onChange={(e) => onChange(e, setRegisterFields)}
                            type="text"
                            name="name"
                            placeholder="Enter Your Name"
                            className="w-full p-3 border border-green-600 rounded-md outline-none"
                        />
                        <input
                            onChange={(e) => onChange(e, setRegisterFields)}
                            type="email"
                            name="email"
                            placeholder="Enter Email Address"
                            className="w-full p-3 border border-green-600 rounded-md outline-none"
                        />
                        <input
                            onChange={(e) => onChange(e, setRegisterFields)}
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="w-full p-3 border border-green-600 rounded-md outline-none"
                        />
                        <button
                            onClick={handleSubmit}
                            className="w-full p-3 bg-green-500 rounded-md border border-green-500 text-white hover:bg-white hover:text-green-600 transition-all duration-500"
                        >
                            Register
                        </button>
                        <p>
                            Alredy have account?{" "}
                            <button
                                className="text-green-600 font-medium hover:text-green-700"
                                onClick={() => setLogin(false)}
                            >
                                Login
                            </button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
