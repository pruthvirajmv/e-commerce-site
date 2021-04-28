import React, {createContext, useContext, useEffect, useReducer} from "react";
import axios from "axios";

import authReducer from "./authReducer"


const AuthContext = createContext();

export function AuthContextProvider({children}){

    const [authState, authDispatch] = useReducer(authReducer, 
        {
            userName : "",
            email : "",
            _id : "",
            isUserLoggedIn : false
        })

    //load user
    useEffect(()=>{
        const loginHistory = JSON.parse(localStorage?.getItem("loginSession"));
        if(loginHistory){
            loginHistory.isUserLoggedIn &&
             (async()=>{
                try{
                  const {data : {success, user}} = await axios.get(`https://e-comm-backend.pruthviraj2.repl.co/users/${(loginHistory._id)}`)
                  if(success){
                    authDispatch({type:"LOAD_USER", payload: user})
                }
                }
                catch(err){
                  console.error(err)
                } finally {
                }
              })()

        }
    },[])

    return(
        <AuthContext.Provider  value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


export default function useAuth(){
    return useContext(AuthContext);
}