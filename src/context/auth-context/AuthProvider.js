import React, {createContext, useContext, useReducer} from "react";

import authReducer from "./AuthReducer"


const AuthContext = createContext();

export function AuthContextProvider({children}){

    const [authState, authDispatch] = useReducer(authReducer, 
        {
            userName : "",
            password : "",
            userId : "",
            isLogin : true
        })

    return(
        <AuthContext.Provider  value={{authState, authDispatch}}>
            {children}
        </AuthContext.Provider>
    )
}


export default function useAuth(){
    return useContext(AuthContext);
}