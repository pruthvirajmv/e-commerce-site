import axios from "axios";
import { removeItemFromCart } from "./removeItemFromCart";

export const moveToWishlistFromCart = async (state, dispatch, item, setIsLoading) => {

    removeItemFromCart(dispatch, item, setIsLoading);
    console.log(state.UserWishlist)
    console.log(state.UserWishlist.some(product => product.productId._id === item._id));

    if(state.UserWishlist.some(product => product.productId._id === item._id )){
        dispatch({ type: "SHOW_TOAST", payload: `${item.name} moved to wishlist` });
    }

    else{

        try{
            setIsLoading(true);
            const {data: {success, wishlistItems }} = await axios.post("https://e-comm-backend.pruthviraj2.repl.co/wishlist/607c3d0604b8840e116d35fc", { id: item._id });
            dispatch({ type: "LOAD_USER_WISHLIST", payload: wishlistItems });
            if(success){
                dispatch({ type: "SHOW_TOAST", payload: `${item.name} added to wishlist` });
            }
        }
        catch(err){
            console.error(err.message);
        }finally {
            setIsLoading(false);
        }

    }


}