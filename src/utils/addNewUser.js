import axios from "axios";

export const addNewUser = async (name, email, password, authDispatch, setIsLoading) => {
    try {
        setIsLoading(true);
        const {status, data:{addedUser} } = await axios({
            method: "POST",
            url: "https://e-comm-backend.pruthviraj2.repl.co/users",
            headers: { username: name ,email: email, password: password }
        });
        console.log(status);
        console.log(addedUser);
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