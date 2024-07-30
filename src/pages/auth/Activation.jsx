import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCRUD } from '../../hooks/useCrud'

const Activation = () => {
  const {warn, handlePOST, postMutation, api, success}=useCRUD()
  const [code, setCode] = useState()
const navigate = useNavigate()

const handleVerifyWithCode = async() => {
  if (!code) {
    return warn("Enter Verification Code!")
  }
  const activationEmail = localStorage.getItem("activationEmail")
  const response = await handlePOST({
    body : {code, email : activationEmail ? activationEmail : ""},
    requiredFields : [],
    mutation: postMutation,
    url : api.tokenActivation
  })
  if (response.statusCode == 200) {
    success("Account Activation Success!")
    localStorage.removeItem("activatioToken")
    navigate('/auth')
  }
}
  useEffect(() => {
    const activationToken = localStorage.getItem("activatioToken")
    const activationEmail = localStorage.getItem("activationEmail")
    if (!activationToken || !activationEmail) {
      navigate('/login')
    }
  }, [])
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className=''>
      <div className='bg-gray-300 rounded-md w-[550px] min-h-[350px] p-5'>
      <div>
      <h1 className='text-center text-2xl font-bold'>Activate Your Account</h1>
      <div className='mx-auto md:w-[80%] grid grid-cols-1 items-stretch'>
        <div>
        <input type="text" 
          onChange={(e) => setCode(e.target.value)}
          placeholder='Enter Activation Code'
          className='w-full rounded outline-none mx-auto py-2 px-2'
        />
        <button onClick={handleVerifyWithCode} className='w-full bg-green-500 rounded-md py-3 px-2 my-2 text-white hover:bg-green-800 transition-colors duration-700'>Activate Now</button>
        </div>
      </div>
      <div className='flex justify-center items-center gap-1'>Did not get Code? <button className='text-green-800'>Resend</button></div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Activation