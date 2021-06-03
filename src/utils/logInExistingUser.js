import axios from "axios";
import { backendServer } from "./index";

export const logInExistingUser = async (
   name,
   password,
   dispatch,
   authDispatch,
   setIsLoading,
   setErrorMsg,
   navigateTo,
   state
) => {
   const { backendApi } = backendServer;
   try {
      setIsLoading(true);
      const {
         status,
         data: { user, token },
      } = await axios({
         method: "POST",
         url: `${backendApi}/user/login`,
         headers: { username: name, password: password },
      });
      if (status === 200) {
         authDispatch({ type: "LOAD_USER", payload: user });
         localStorage?.setItem("loginSession", JSON.stringify({ token, isUserLoggedIn: true }));
         dispatch({ type: "SHOW_TOAST", payload: "Login Successful" });
         navigateTo(state?.form ? state : "/products");
      }
   } catch (err) {
      switch (err.response.status) {
         case 404:
            return setErrorMsg("User not found");

         case 403:
            return setErrorMsg("Incorrect user name or password");

         case 400:
            return setErrorMsg("cannot retrive user");

         default:
            return console("uncaught error");
      }
   } finally {
      setIsLoading(false);
   }
};
