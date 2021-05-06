import axios from "axios";
import {backendServer} from "./index";


export const removeItemFromCart = async (userId, dispatch, item, setIsLoading) => {
    const { backendApi } = backendServer;
    try{
        setIsLoading(true);
        const {data:{success, cartItems}} = await axios.post(`${backendApi}/cart/${userId}`, { id: item._id, remove: true });
        dispatch({ type: "LOAD_USER_CART", payload: cartItems })
        if(success){
            dispatch({ type: "SHOW_TOAST", payload: `${item.name} removed from cart` });
        }
    }
    catch(err){
        console.error(err.message);
    }finally {
        setIsLoading(false);
    }
  }

