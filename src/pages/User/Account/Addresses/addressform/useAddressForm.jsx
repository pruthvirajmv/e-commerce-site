import { useReducer } from "react";
import { addressFormReducer } from "./addressFormReducer";

export const addressFormInitialState = {
   address: {
      name: "",
      house: "",
      street: "",
      city: "",
      pincode: "",
      state: "Karnataka",
      country: "India",
      phoneNumber: "",
   },
   errorMessage: "",
};

export default function useAddressForm() {
   const [addressFormState, addressFormDispatch] = useReducer(
      addressFormReducer,
      addressFormInitialState
   );

   return { addressFormState, addressFormDispatch };
}
