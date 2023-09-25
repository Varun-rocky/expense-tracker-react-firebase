import { Navigate } from "react-router-dom";

export const useGetUserInfo = () => {
  const jsonData = JSON.parse(localStorage.getItem("auth"));
  
  if(jsonData!=null){
    const { name, profilePhoto ,userId,isAuth} = jsonData;
  return  {name ,profilePhoto,userId,isAuth};
  }
  else{
    return <Navigate to="/"/>
  }
};
