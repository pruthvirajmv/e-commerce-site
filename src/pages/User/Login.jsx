
import React, { useState } from "react";

import "./login.css"

import useInput from "./Input";
import { logInExistingUser } from "../../utils";
import useCommerce from "../../context/commerce-context";
import useAuth from "../../context/auth-context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

export function Login(){
    
    const {state} = useLocation();
    const navigate = useNavigate();

    const {dispatch, setIsLoading} = useCommerce();
    const {authDispatch} = useAuth();
    
    const user = useInput("");
    const userPassword = useInput("");

    const [showPassword, setShowPassword] = useState(false);

    const [errorMsg, setErrorMsg] = useState("")


    const loginSubmitHandler = (e) => {
        e.preventDefault();
        logInExistingUser(user.value, userPassword.value, dispatch, authDispatch, setIsLoading, setErrorMsg, navigate, state);
    }

    return(
        <>
        <div className="login-layout" >
            <form className="form-container"
            onSubmit={loginSubmitHandler}>
                <h2>User Login</h2>
                <section>
                    <label>
                        User Name
                    </label>
                    <input className="input input-primary" type="text" {...user} 
                    placeholder="enter username"
                    required></input>
                </section>

                <section>
                    <label>
                        Password 
                    </label>
                    <div className="input input-primary">
                    <input 
                        className="input" 
                        type={showPassword? "text" :"password"}
                        {...userPassword}
                        placeholder="enter password"
                        minLength="8"
                        required
                     ></input>
                     <span><i 
                        onClick={() => setShowPassword(prev => !prev)}
                        className={showPassword? "fa fa-eye" :"fa fa-eye-slash"} aria-hidden="true"></i></span>
                    </div>                    
                </section>
                <button type="submit" className="bttn bttn-primary login" >Login</button>

            </form>

            <p className="error-msg" >{errorMsg}</p>

            <div>Forgot your password? <button 
                onClick = {() => navigate('/reset') }
                className="bttn bttn-secondary">Reset</button> </div>
                <div>Not a user yet? <button 
                onClick = {() => navigate('/signup') }
                className="bttn bttn-secondary">Sign Up</button> </div>

        </div>


        </>
    )


}