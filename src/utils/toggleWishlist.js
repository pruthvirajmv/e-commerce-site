import axios from "axios";
import {backendServer} from "./index";


export const toggleWishlist = async (userId, dispatch, item, setIsLoading) => {
    const { backendApi } = backendServer;
    try{
        setIsLoading(true);
        const {data: {success, wishlistItems }} = await axios.post(`${backendApi}/wishlist/${userId}`, { id: item._id });
        dispatch({ type: "LOAD_USER_WISHLIST", payload: wishlistItems });
        if(success){
            dispatch({ type: "SHOW_TOAST", payload: wishlistItems.some(product => product.productId._id === item._id)  ? `${item.name} added to wishlist` : `${item.name} removed from wishlist` });
        }
    }
    catch(err){
        console.error(err.message);
    }finally {
        setIsLoading(false);
    }
}