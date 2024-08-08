import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import "react-toastify/dist/ReactToastify.css";
import { useCRUD } from "./hooks/useCrud";
import { useGlobalStore } from "./store/globalStore";
import { getData } from "./utils/apiCore";
import { useEffect } from "react";

function App() {
  const { user, setUser, recieverId, setChats } = useGlobalStore()
  const {api} = useCRUD()
  const checkUser = async() => {
    const tokenLs = localStorage.getItem("token")
    if (tokenLs) {
      const token = tokenLs
    const res = await getData({url:api.checkUser, token})
    if (res?.statusCode == 200) {
      setUser(res?.user)
      localStorage.setItem("token",res?.user?.token)
    }else{
      setUser(null)
      // localStorage.removeItem("token")
    }
    }else{
      setUser({})
    }
  }

  const getChats = () => {
    
  }
  useEffect(() => {
    checkUser()
  }, [])
  return (
    <>
      <div className='bg-[url(/images/bg-2.jpg)] bg-cover bg-center bg-no-repeat h-screen py-14 flex justify-center items-center'>
        <div className="_container h-[630px]">
          <div className="h-full flex justify-center items-center overflow-hidden">
            <RouterProvider router={router} />
          </div>
        </div>
    
      </div>

    </>
  );
}

export default App;
