import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <div className='bg-gradient-to-b from-green-700 to-white h-screen py-14 flex justify-center items-center'>
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
