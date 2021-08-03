import axios from "axios";
import { backendServer } from "../index";

export const toggleWishlist = async (dispatch, item, setIsLoading) => {
   const { backendApi } = backendServer;
   try {
      setIsLoading(true);
      const {
         data: { success, wishlistItems },
      } = await axios.post(`${backendApi}/wishlist`, { id: item._id });
      dispatch({ type: "LOAD_USER_WISHLIST", payload: wishlistItems });
      if (success) {
         dispatch({
            type: "SHOW_TOAST",
            payload: wishlistItems.some((product) => product.productId._id === item._id)
               ? `added to wishlist ${item.name}`
               : `removed from wishlist ${item.name}`,
         });
      }
   } catch (err) {
      console.error(err.message);
   } finally {
      setIsLoading(false);
   }
};
