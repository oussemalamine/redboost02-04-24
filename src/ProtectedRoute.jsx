import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLogged, children }) {
  // If not logged in, redirect to the not_connected page
  if (!isLogged) {
    return <Navigate to="/login" />;
  }

  // If logged in, render the children components
  return children;
}

export default ProtectedRoute;
