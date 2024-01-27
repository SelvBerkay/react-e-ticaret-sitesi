import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/User";

export default function PrivateRouteFavs({children}) {
  const {user} = useContext(UserContext)
  
  if (!user?.isLogin) {
    return <Navigate to="/login" replace={true}/>
  }
  return children
}