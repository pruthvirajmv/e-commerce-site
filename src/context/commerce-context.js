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
    Toast: {
      status: "Show",
      msg: "Updating..."
    }
  });

  const [isLoading, setIsLoading] = useState("fetchStarted");

  useEffect(() => {
    (async () => {
      try {
        setIsLoading("fetchStarted");
        const response = await axios.get("/api/products");
        dispatch({ type: "LOAD_PRODUCTS", payload: response.data.products });
      } catch (error) {
        console.error();
      } finally {
        setIsLoading("fetchCompleted");
      }
    })();
  }, []);

  useEffect(() => {
    let showToastTimer = setTimeout(
      () => dispatch({ type: "HIDE_TOAST" }),
      1000
    );
    return () => clearTimeout(showToastTimer);
  }, [state.Toast.status]);

  return (
    <CommerceContext.Provider value={{ state, dispatch, reducer, isLoading }}>
      {children}
    </CommerceContext.Provider>
  );
}

export default function useCommerce() {
  return useContext(CommerceContext);
}
