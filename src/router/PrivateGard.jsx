
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalStore } from "../store/globalStore";
import { useCRUD } from "../hooks/useCrud";
import { useEffect } from "react";
import { getData } from "../utils/apiCore";

const PrivateGard = () => {
  const { user } = useGlobalStore()
  const {api} = useCRUD()
  const getAllUserData = async(tk) => {
    const response = await getData({url : `${api.allUsers}/${tk}`})
    console.log(response);
}


useEffect(() => {
  if (user?.token) {
    getAllUserData(user?.token)
  }
}, [user])
  if (localStorage.getItem("token")) {
    return user?.token ? <Outlet /> : <Navigate to="/auth" />;
  }
  return <Navigate to="/auth" />
};

export default PrivateGard;
