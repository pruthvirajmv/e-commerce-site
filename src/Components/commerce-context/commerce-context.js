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
    ToastMsg: "Updating..."
  });

  const [isLoading, setIsLoading] = useState("fetchStarted");

  const [showToast, setShowToast] = useState("Hide");

  useEffect(() => {
    setIsLoading("fetchStarted");
    (async () => {
      try {
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
    setShowToast("Show");
    let showToastTimer = setTimeout(() => setShowToast("Hide"), 1100);
    return () => clearTimeout(showToastTimer);
  }, [state, state.ToastMsg]);

  return (
    <CommerceContext.Provider
      value={{ state, dispatch, reducer, isLoading, showToast, setShowToast }}
    >
      {children}
    </CommerceContext.Provider>
  );
}

export default function useCommerce() {
  return useContext(CommerceContext);
}
