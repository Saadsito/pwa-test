import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../states/useUser';

const UnAuthRoute = ({ children, auth, ...props }) => {
  const user = useUser();

  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default UnAuthRoute;
