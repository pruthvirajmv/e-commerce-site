import axios from "axios";


export const toggleWishlist = async (dispatch, item, setIsLoading) => {
    try{
        setIsLoading(true);
        const {data: {success, wishlistItems }} = await axios.post("https://e-comm-backend.pruthviraj2.repl.co/wishlist/607c3d0604b8840e116d35fc", { id: item._id });
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