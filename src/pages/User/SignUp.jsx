import React, { useState } from "react";
import "./login.css";
import { useLocation, useNavigate } from "react-router-dom";

import useInput from "./Input";

import { addNewUser } from "../../utils/server-requests";
import { useCommerce, useAuth } from "../../context";

export function SignUp() {
   const { state } = useLocation();
   const navigate = useNavigate();

   const { setIsLoading } = useCommerce();
   const { authDispatch } = useAuth();

   const name = useInput("");
   const userMail = useInput("");
   const password = useInput("");
   const confirmPassword = useInput("");

   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const [errorMsg, setErrorMsg] = useState("");

   const signUpSubmitHandler = (e) => {
      e.preventDefault();

      if (userMail.value === "" || !/^([^@]+)([@]{1})([a-z]+)\.com$/.test(userMail.value)) {
         userMail.ref.current.focus();
         return setErrorMsg("please enter valid email");
      }

      if (!/[.\d]/.test(password.value)) {
         password.ref.current.focus();
         return setErrorMsg("password must be alphanumeric");
      }

      if (password.value !== confirmPassword.value) {
         confirmPassword.ref.current.focus();
         return setErrorMsg("password did not match");
      }

      const newUser = {
         name: name.value,
         email: userMail.value,
         password: password.value,
      };

      addNewUser(newUser, authDispatch, setIsLoading, navigate);
   };

   return (
      <>
         <div className="login-layout">
            <form className="form-container" onSubmit={signUpSubmitHandler}>
               <h2>Register</h2>
               <section>
                  <label>User Name</label>
                  <input
                     className="input input-primary"
                     type="text"
                     onClick={() => setErrorMsg("")}
                     {...name}
                     placeholder="please enter name"
                     required></input>
               </section>

               <section>
                  <label>Email</label>
                  <input
                     className="input input-primary"
                     type="text"
                     onClick={() => setErrorMsg("")}
                     {...userMail}
                     placeholder="please enter email"
                     required></input>
               </section>

               <section>
                  <label>Password</label>
                  <div className="input input-primary">
                     <input
                        className="input"
                        type={showPassword ? "text" : "password"}
                        {...password}
                        onClick={() => setErrorMsg("")}
                        placeholder="please set password"
                        minLength="8"
                        required></input>
                     <span className="">
                        <i
                           className={showPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                           onClick={() => setShowPassword((prev) => !prev)}
                           aria-hidden="true"></i>
                     </span>
                  </div>
               </section>

               <section>
                  <label>Confirm Password</label>
                  <div className="input input-primary">
                     <input
                        className="input"
                        type={showConfirmPassword ? "text" : "password"}
                        onClick={() => setErrorMsg("")}
                        {...confirmPassword}
                        placeholder="confirm password"
                        required></input>
                     <span>
                        <i
                           className={showConfirmPassword ? "fa fa-eye" : "fa fa-eye-slash"}
                           onClick={() => setShowConfirmPassword((prev) => !prev)}
                           aria-hidden="true"></i>
                     </span>
                  </div>
               </section>

               <p className="error-msg">{errorMsg}</p>

               <button type="submit" className="bttn bttn-primary login">
                  Sign Up
               </button>
            </form>
            <div>
               already a user?{" "}
               <button onClick={() => navigate("/login")} className="bttn bttn-secondary">
                  Login
               </button>{" "}
            </div>
         </div>
      </>
   );
}
