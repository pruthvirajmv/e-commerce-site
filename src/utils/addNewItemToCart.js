import axios from "axios";


export const addNewItemToCart = async (dispatch, item, setIsLoading) => {

        try{
            setIsLoading(() => true);
            const {data:{success, cartItems}} = await axios.post("https://e-comm-backend.pruthviraj2.repl.co/cart/607c3d0604b8840e116d35fc", { id: item._id, qty: 1 });
            dispatch({ type: "LOAD_USER_CART", payload: cartItems });
            if(success){
            dispatch({ type: "SHOW_TOAST", payload: `${item.name} added to cart` });
        }
        }
        catch(err){
            console.error(err.message);
        }finally {
            setIsLoading(() => false);
        }

  }