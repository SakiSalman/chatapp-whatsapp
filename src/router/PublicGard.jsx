import { Navigate, Outlet } from "react-router-dom";
import { useGlobalStore } from "../store/globalStore";

const PublicGard = () => {
  const { user } = useGlobalStore();
  if (user?.token) {
    return user?.token ? <Navigate to="/" /> : <Outlet />;
  }

  return <Outlet />;
};

export default PublicGard;
