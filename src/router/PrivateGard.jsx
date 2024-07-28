
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalStore } from "../store/globalStore";

const PrivateGard = () => {
  const { user } = useGlobalStore()

  return user ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateGard;
