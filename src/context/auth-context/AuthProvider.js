import React, { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { backendServer, setupAuthHeaderForServiceCalls } from "../../utils";

import authReducer from "./authReducer";

const AuthContext = createContext();

export const initialAuthState = {
   user: {
      name: "",
      email: "",
      addresses: [],
   },
   isUserLoggedIn: false,
};

export function AuthContextProvider({ children }) {
   const loginHistory = JSON.parse(localStorage?.getItem("loginSession"));

   if (loginHistory?.token) {
      setupAuthHeaderForServiceCalls(loginHistory.token);
      initialAuthState.isUserLoggedIn = loginHistory.isUserLoggedIn;
   }

   const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

   const { backendApi } = backendServer;
   console.log(authState);

   //load user
   useEffect(() => {
      if (loginHistory) {
         loginHistory.token &&
            (async () => {
               try {
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
                  localStorage?.removeItem("loginSession");
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
