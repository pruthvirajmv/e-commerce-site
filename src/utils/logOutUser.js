import axios from "axios";

export const logOutUser = async (userId, dispatch, authDispatch, setIsLoading) => {
    console.log(userId)
    try {
        setIsLoading(true);
        const {data:{success}} = await axios({
            method: "POST",
            url: `https://e-comm-backend.pruthviraj2.repl.co/users/${userId}/logout`,
        });
        if(success){
            authDispatch({type: "LOGOUT_USER", payload: []});      
            localStorage?.removeItem("loginSession");
            dispatch({ type: "SHOW_TOAST", payload: "Logout Successful" });
        }
            
    }
    catch(err){
        console.error(err.response);
    }
    finally{
        setIsLoading(false);
    }
}