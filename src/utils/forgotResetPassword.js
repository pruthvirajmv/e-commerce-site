import axios from "axios";

import { backendServer } from "./index";

export const forgotResetPassword = async (
   email,
   password,
   setErrorMsg,
   setIsLoading,
   authDispatch,
   dispatch,
   navigateTo
) => {
   const { backendApi } = backendServer;
   try {
      setIsLoading(true);
      const {
         data: { success, user, token },
      } = await axios({
         method: "POST",
         url: `${backendApi}/user/resetpassword`,
         headers: { email: email, password: password },
      });
      if (success) {
         authDispatch({ type: "LOAD_USER", payload: user });
         localStorage?.setItem(
            "loginSession",
            JSON.stringify({ tooken, isUserLoggedIn: user.isUserLoggedIn })
         );
         dispatch({ type: "SHOW_TOAST", payload: "Password Reset Successful" });
         setIsLoading(false);
         navigateTo("/profile");
      }
   } catch (err) {
      if (err.response.status === 404) {
         setErrorMsg("user does not exist");
      } else {
         setErrorMsg("Something went wrong, please try again");
      }
   } finally {
      setIsLoading(false);
   }
};
