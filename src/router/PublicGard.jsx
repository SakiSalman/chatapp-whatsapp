import { Navigate, Outlet } from "react-router-dom";
import { useGlobalStore } from "../store/globalStore";

const PublicGard = () => {
  const { user } = useGlobalStore();

  if (localStorage.getItem("user")) {
    return user ? <Navigate to="/" /> : <Outlet />;
  }

  return <Outlet />;
};

export default PublicGard;
