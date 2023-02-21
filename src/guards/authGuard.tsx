import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context";

const authGuard = () => {
  const { user } = useContext(AuthContext);
  return user ? <Outlet /> : <Navigate replace to="/" />;
};

export default authGuard;
