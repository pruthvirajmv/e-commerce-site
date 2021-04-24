import axios from "axios";

import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from "react";

import reducer from "./commerce-reducer";

const CommerceContext = createContext();

export function CommerceContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    ProductsList: [],
    UserCart: [],
    UserWishlist: [],
    Toast: {
      status: "Show",
      msg: "Updating..."
    }
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("https://e-comm-backend.pruthviraj2.repl.co/products");
        dispatch({ type: "LOAD_PRODUCTS", payload: response.data.products });
      } catch (error) {
        console.error("error", error.message);
        dispatch({ type: "SHOW_TOAST", payload: "error while updating" });
      } finally {
        setIsLoading(false);
        dispatch({ type: "SHOW_TOAST", payload: "page updated" });

      }
    })();
  }, []);

    useEffect(()=>{
    (async()=>{
      try{
        const {data : {success, wishlistItems}} = await axios.get("https://e-comm-backend.pruthviraj2.repl.co/wishlist/607c3d0604b8840e116d35fc")
        if(success){
          dispatch({type:"LOAD_USER_WISHLIST", payload: wishlistItems})
        }
      }
      catch(err){
        console.error(err)
      } finally {
        setIsLoading(false);
      }
    })()
  },[])

  useEffect(()=>{
    (async()=>{
      try{
        const {data : {success, cartItems}} = await axios.get("https://e-comm-backend.pruthviraj2.repl.co/cart/607c3d0604b8840e116d35fc")
        if(success){
          dispatch({type:"LOAD_USER_CART", payload:cartItems})
        }
      }
      catch(err){
        console.error(err)
      } finally {
        setIsLoading(false);
      }
    })()
  },[])

  useEffect(() => {
    let showToastTimer = setTimeout(
      () => dispatch({ type: "HIDE_TOAST" }),
      2000
    );
    return () => clearTimeout(showToastTimer);
  }, [state.Toast.status]);

  return (
    <CommerceContext.Provider value={{ state, dispatch, isLoading, setIsLoading }}>
      {children}
    </CommerceContext.Provider>
  );
}

export default function useCommerce() {
  return useContext(CommerceContext);
}
