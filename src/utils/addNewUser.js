import axios from "axios";

import {backendServer} from "./index";


export const addNewUser = async (name, email, password, authDispatch, setIsLoading) => {
    const { backendApi } = backendServer;
    try {
        setIsLoading(true);
        const {status, data:{addedUser} } = await axios({
            method: "POST",
            url: `${backendApi}/users`,
            headers: { username: name ,email: email, password: password }
        });
        if(status === 200){
            authDispatch({type: "LOAD_USER", payload: addedUser})
            localStorage?.setItem("loginSession", JSON.stringify({ _id: addedUser._id, isUserLoggedIn: addedUser.isUserLoggedIn }))
        }
    }
    catch(err){
        console.error(err.response);
    }
    finally{
        setIsLoading(false);
    }
}