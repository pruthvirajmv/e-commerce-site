import axios from "axios";
import { backendServer } from "../index";

export const removeItemFromCart = async (dispatch, item, setIsLoading) => {
   const { backendApi } = backendServer;
   try {
      setIsLoading(true);
      const {
         data: { success, cartItems },
      } = await axios.post(`${backendApi}/cart`, { id: item._id, remove: true });
      dispatch({ type: "LOAD_USER_CART", payload: cartItems });
      if (success) {
         dispatch({ type: "SHOW_TOAST", payload: `removed from cart ${item.name}` });
      }
   } catch (err) {
      console.error(err.message);
   } finally {
      setIsLoading(false);
   }
};
