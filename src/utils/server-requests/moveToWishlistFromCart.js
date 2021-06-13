import axios from "axios";
import { backendServer } from "../index";
import { removeItemFromCart } from "./removeItemFromCart";

export const moveToWishlistFromCart = async (state, dispatch, item, setIsLoading) => {
   const { backendApi } = backendServer;
   removeItemFromCart(dispatch, item, setIsLoading);

   if (state.UserWishlist.some((product) => product.productId._id === item._id)) {
      dispatch({ type: "SHOW_TOAST", payload: `${item.name} moved to wishlist` });
   } else {
      try {
         setIsLoading(true);
         const {
            data: { success, wishlistItems },
         } = await axios.post(`${backendApi}/wishlist`, { id: item._id });
         dispatch({ type: "LOAD_USER_WISHLIST", payload: wishlistItems });
         if (success) {
            dispatch({ type: "SHOW_TOAST", payload: `${item.name} added to wishlist` });
         }
      } catch (err) {
         console.error(err.message);
      } finally {
         setIsLoading(false);
      }
   }
};
