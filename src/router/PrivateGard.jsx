
import { Navigate, Outlet } from "react-router-dom";
import { useGlobalStore } from "../store/globalStore";
import { useCRUD } from "../hooks/useCrud";
import { useEffect } from "react";
import { getData } from "../utils/apiCore";

const PrivateGard = () => {
  const { user, setUser } = useGlobalStore()
  const {api} = useCRUD()
  const getAllUserData = async(tk) => {
    const response = await getData({url : `${api.allUsers}/${tk}`})
    if (response.statusCode === 200){
      setUser({
        ...user,
        users : response?.data?.length > 0 ?  response?.data : []
      })
    }
}


useEffect(() => {
  if (user?.token) {
    getAllUserData(user?.token)
  }
}, [])
  if (user) {
    return user?.token ? <Outlet /> : <Navigate to="/auth" />;
  }
  return <Navigate to="/auth" />
};

export default PrivateGard;
