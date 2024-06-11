import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
      />
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
