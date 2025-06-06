import { jwtDecode } from 'jwt-decode';
import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children,allowedRoles}) => {
  
    const token=localStorage.getItem("token");
    if(!token){
      <Navigate to="/login" replace/>
    }
    try{
      const roles=jwtDecode(token).roles||[];
      const matchingroles=allowedRoles.filter(role=>roles.includes(role));
      const hasAccess=matchingroles.length>0;

      return hasAccess?children:<Navigate to="/unauthorized" replace/>
    }catch (e) {
    console.error("Token decode error:", e);
    return <Navigate to="/login" replace />;
  
}
}

export default ProtectedRoute