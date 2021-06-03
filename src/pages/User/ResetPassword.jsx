import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

import useInput from "./Input";

import { forgotResetPassword } from "../../utils";
import { useAuth, useCommerce } from "../../context";

export function ResetPassword() {
   const navigate = useNavigate();

   const { dispatch, setIsLoading } = useCommerce();
   const { authDispatch } = useAuth();

   const userMail = useInput("");
   const password = useInput("");
   const confirmPassword = useInput("");

   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const [errorMsg, setErrorMsg] = useState("");

   const forgotPasswordSubmitHandler = (e) => {
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
      setErrorMsg("");

      forgotResetPassword(
         userMail.value,
         password.value,
         setErrorMsg,
         setIsLoading,
         authDispatch,
         dispatch,
         navigate
      );
   };

   return (
      <>
         <div className="login-layout">
            <form className="form-container" onSubmit={forgotPasswordSubmitHandler}>
               <h2>Reset Password</h2>

               <section>
                  <label>Email</label>
                  <input
                     className="input input-primary"
                     type="text"
                     {...userMail}
                     placeholder="please enter email"
                     required></input>
               </section>

               <section>
                  <label>New Password</label>
                  <div className="input input-primary">
                     <input
                        className="input"
                        type={showPassword ? "text" : "password"}
                        {...password}
                        placeholder="enter new password"
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
                  Reset
               </button>
            </form>
         </div>
      </>
   );
}
