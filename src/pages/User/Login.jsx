import React, { useState } from "react";

import "./login.css";

import useInput from "./Input";
import { logInExistingUser } from "../../utils/server-requests";
import { useCommerce, useAuth } from "../../context";
import { useLocation, useNavigate } from "react-router-dom";

export function Login() {
   const { state } = useLocation();
   const navigate = useNavigate();

   const { dispatch, setIsLoading } = useCommerce();
   const { authDispatch } = useAuth();

   const userEmail = useInput("");
   const userPassword = useInput("");

   const [showPassword, setShowPassword] = useState(false);

   const [errorMsg, setErrorMsg] = useState("");

   const loginSubmitHandler = (e) => {
      e.preventDefault();
      logInExistingUser(
         userEmail.value,
         userPassword.value,
         dispatch,
         authDispatch,
         setIsLoading,
         setErrorMsg,
         navigate,
         state
      );
   };

   const guestUserLogin = () => {
      const email = "guestuser@gmail.com";
      const password = "neoG@2021";
      userEmail.ref.current.value = email;
      userPassword.ref.current.value = password;
      setTimeout(
         () =>
            logInExistingUser(
               email,
               password,
               dispatch,
               authDispatch,
               setIsLoading,
               setErrorMsg,
               navigate,
               state
            ),
         1000
      );
   };

   return (
      <>
         <div className="login-layout">
            <form className="form-container" onSubmit={loginSubmitHandler}>
               <h2>User Login</h2>
               <section>
                  <label>Email</label>
                  <input
                     className="input input-primary"
                     type="text"
                     {...userEmail}
                     placeholder="enter registered email"
                     required></input>
               </section>

               <section>
                  <label>Password</label>
                  <div className="input input-primary">
                     <input
                        className="input"
                        type={showPassword ? "text" : "password"}
                        {...userPassword}
                        placeholder="enter password"
                        minLength="8"
                        required></input>
                     <span>
                        <i
                           onClick={() => setShowPassword((prev) => !prev)}
                           className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                           aria-hidden="true"></i>
                     </span>
                  </div>
               </section>
               <button type="submit" className="bttn bttn-primary login">
                  Login
               </button>
            </form>

            <p className="error-msg">{errorMsg}</p>

            <div>
               Login as a guest?{" "}
               <button onClick={guestUserLogin} className="bttn bttn-secondary">
                  Guest
               </button>{" "}
            </div>
            <div>
               Not a user yet?{" "}
               <button onClick={() => navigate("/signup")} className="bttn bttn-secondary">
                  Sign Up
               </button>{" "}
            </div>
         </div>
      </>
   );
}
