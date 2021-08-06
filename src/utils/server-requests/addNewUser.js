import axios from "axios";

import { backendServer } from "../index";

export const addNewUser = async (user, authDispatch, setIsLoading, navigate) => {
   const { backendApi } = backendServer;
   const { name, email, password } = user;
   try {
      setIsLoading(true);
      const { status } = await axios({
         method: "POST",
         url: `${backendApi}/user/register`,
         headers: { name, email, password },
      });
      if (status === 200) {
         navigate("/login");
      }
   } catch (err) {
      console.error(err.response);
   } finally {
      setIsLoading(false);
   }
};
