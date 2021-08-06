import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../context";

export function PrivateRoute({ path, ...props }) {
   const { authState } = useAuth();

   return authState.isUserLoggedIn ? (
      <Route path={path} {...props} />
   ) : (
      <Navigate state={{ from: path }} replace to="/login" />
   );
}
