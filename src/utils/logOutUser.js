import axios from "axios";
import { backendServer } from "./index";

export const logOutUser = async (userId, dispatch, authDispatch, setIsLoading) => {
   const { backendApi } = backendServer;
   try {
      setIsLoading(true);
      const {
         data: { success },
      } = await axios({
         method: "POST",
         url: `${backendApi}/user/${userId}/logout`,
      });
      if (success) {
         authDispatch({ type: "LOGOUT_USER", payload: [] });
         localStorage?.removeItem("loginSession");
         dispatch({ type: "SHOW_TOAST", payload: "Logout Successful" });
      }
   } catch (err) {
      console.error(err.response);
   } finally {
      setIsLoading(false);
   }
};
