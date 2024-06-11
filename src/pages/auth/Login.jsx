import React, { useState } from 'react'

const Login = () => {
  const [login, setLogin] = useState(false)
  return (
      <div className='w-full'>
        {
          !login && <div className='mx-auto flex items-center flex-col'>
          <h2 className='text-center text-3xl font-medium mb-4'>Login</h2>
         <div className="bg-[#fff] w-full md:w-96 rounded-md shadow-md flex flex-col items-center p-8 gap-2">
            <input type="email" placeholder='Enter Email Address' className='w-full p-3 border border-green-600 rounded-md outline-none'/>
            <input type="password" placeholder='Enter Password' className='w-full p-3 border border-green-600 rounded-md outline-none'/>
            <button className='w-full p-3 bg-green-500 rounded-md border border-green-500 text-white hover:bg-white hover:text-green-600 transition-all duration-500'>Login</button>
            <p>Don't have account yet? <button className='text-green-600 font-medium hover:text-green-700' onClick={() => setLogin(true)}>Register</button></p>

        </div>
         </div>
         }
         {
          login && <div  className='mx-auto flex items-center flex-col'>
          <h2 className='text-center text-3xl font-medium mb-4'>Register</h2>
         <div className="bg-[#fff] w-full md:w-96 rounded-md shadow-md flex flex-col items-center p-8 gap-2">
            <input type="text" placeholder='Enter Your Name' className='w-full p-3 border border-green-600 rounded-md outline-none'/>
            <input type="email" placeholder='Enter Email Address' className='w-full p-3 border border-green-600 rounded-md outline-none'/>
            <input type="password" placeholder='Enter Password' className='w-full p-3 border border-green-600 rounded-md outline-none'/>
            <button className='w-full p-3 bg-green-500 rounded-md border border-green-500 text-white hover:bg-white hover:text-green-600 transition-all duration-500'>Register</button>
            <p>Alredy have account? <button className='text-green-600 font-medium hover:text-green-700' onClick={() => setLogin(false)}>Login</button></p>

        </div>
         </div>
         }
      </div>
  )
}

export default Login