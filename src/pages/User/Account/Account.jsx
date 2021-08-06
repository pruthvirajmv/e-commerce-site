import React from "react";

import "./account.css";

import { useAuth, useCommerce } from "../../../context";
import { NavLink, useNavigate, Outlet } from "react-router-dom";

export function Account() {
   const { dispatch, setIsLoading } = useCommerce();
   const { authState, authDispatch } = useAuth();
   const navigate = useNavigate();

   return (
      <>
         <div className="account-layout">
            <h2>Welcome {authState.name} !</h2>
            <div className="account-nav">
               <NavLink end activeClassName="activePage" to="/account">
                  Profile
               </NavLink>
               <NavLink activeClassName="activePage" to="/account/addresses">
                  Adresses
               </NavLink>
               <NavLink activeClassName="activePage" to="/account/orders">
                  Orders
               </NavLink>
               <NavLink activeClassName="activePage" to="/account/settings">
                  Settings
               </NavLink>
            </div>
            <div>
               <Outlet />
            </div>
         </div>
      </>
   );
}
