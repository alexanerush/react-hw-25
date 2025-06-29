import React from 'react';
import { Navigate } from 'react-router-dom';
import { CustomUser } from '../pages/Login'; 

interface PrivateRouteProps {
  user: CustomUser | null;
  children: React.ReactElement;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default PrivateRoute;

