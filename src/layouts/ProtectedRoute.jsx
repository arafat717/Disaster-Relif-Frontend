/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useCurrentToken } from "../redux/auth/authSlice";

const ProtectedRoute = ({ children }) => {
  const token = useSelector(useCurrentToken);

  //   let user;

  if (!token) {
    return <Navigate to="/register" replace={true}></Navigate>;
  }
  //   const disPatch = useAppDispatch();

  // console.log(user);

  //   if (role !== undefined && role !== user?.role) {
  //     disPatch(logout());
  //     return <Navigate to="/login" replace={true}></Navigate>;
  //   }
  //   if (!token) {
  //     return <Navigate to="/login" replace={true}></Navigate>;
  //   }
  return children;
};

export default ProtectedRoute;
