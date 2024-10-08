import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ThePrivateRoute = () => {
  const currentUser = useSelector((state) => state.user);
  return currentUser.currentUser ? <Outlet /> : <Navigate to="/login" />;
};

export default ThePrivateRoute;
