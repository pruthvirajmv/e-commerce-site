import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { backendServer } from "../../utils";

import authReducer from "./authReducer";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
   const [authState, authDispatch] = useReducer(authReducer, {
      userName: "",
      email: "",
      _id: "",
      isUserLoggedIn: false,
      token: "",
   });

   const { backendApi } = backendServer;

   function setupAuthHeaderForServiceCalls(token) {
      if (token) {
         token = `Bearer ${token}`;
         return (axios.defaults.headers.common["Authorization"] = token);
      }
      delete axios.defaults.headers.common["Authorization"];
   }

   //load user
   useEffect(() => {
      const loginHistory = JSON.parse(localStorage?.getItem("loginSession"));
      console.log(loginHistory);
      if (loginHistory) {
         loginHistory.isUserLoggedIn &&
            (async () => {
               try {
                  setupAuthHeaderForServiceCalls(loginHistory.token);
                  const {
                     data: { success, user },
                  } = await axios({
                     method: "GET",
                     url: `${backendApi}/user`,
                  });
                  if (success) {
                     authDispatch({ type: "LOAD_USER", payload: user });
                  }
               } catch (err) {
                  console.error(err);
               } finally {
               }
            })();
      }
   }, []);

   return (
      <AuthContext.Provider value={{ authState, authDispatch }}>{children}</AuthContext.Provider>
   );
}

export function useAuth() {
   return useContext(AuthContext);
}
