import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToast = () => {
  const warn = (msg) => toast.warn(msg);
  const error = (msg) => toast.error(msg);
  const success = (msg) => toast.success(msg);
  const info = (msg) => toast.info(msg);

  return { warn, error, success, info };
};

export default useToast;

export const ToastProvider = () => (
  <ToastContainer
    position="top-left"
    autoClose={1500}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    // filled
    theme="colored"
    // theme="light"
    className="text-lg font-base tracking-wider"
    style={{ letterSpacing: "2px", fontFamily: "Josefin Sans !important" }}
  />
);
