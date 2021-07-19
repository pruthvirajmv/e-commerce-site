import React from "react";
import { useNavigate } from "react-router-dom";

import "./account.css";

import { useAuth, useCommerce } from "../../../context";
import { logOutUser } from "../../../utils/server-requests";

export function Settings() {
   const { dispatch, setIsLoading } = useCommerce();
   const { authDispatch } = useAuth();
   const navigate = useNavigate();

   const logOutSubmitHandler = (e) => {
      e.preventDefault();
      logOutUser(dispatch, authDispatch, setIsLoading);
      navigate("/products");
   };
   return (
      <>
         <h3 className="section-header">Account Settings </h3>
         <button className="bttn bttn-primary " onClick={logOutSubmitHandler}>
            Logout
         </button>
      </>
   );
}
