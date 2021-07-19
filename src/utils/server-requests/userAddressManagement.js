import axios from "axios";
import { backendServer } from "../index";
import { AddressFormActionType } from "../../pages/User/Account/Addresses/addressform/AddressFormActionType";

export const userAddressManagement = async (addressMangementParam) => {
   const { backendApi } = backendServer;
   const { type, address, setIsLoading, dispatch, addressFormDispatch } = addressMangementParam;

   try {
      setIsLoading(() => true);
      const {
         data: { addresses },
      } = await axios.post(`${backendApi}/user/addresses/${type}`, { address });
      dispatch({ type: "UPDATE_DELIVERY_ADDRESSES", payload: addresses });
      switch (type) {
         case "add":
            return dispatch({ type: "SHOW_TOAST", payload: "new address added" });
         case "update":
            return dispatch({ type: "SHOW_TOAST", payload: "address updated" });
         case "remove":
            return dispatch({ type: "SHOW_TOAST", payload: "address removed" });
         default:
            break;
      }
   } catch (err) {
      console.error(err.message);
      addressFormDispatch({
         type: AddressFormActionType.SET_ERROR_MESSAGE,
         payload: "Please Try Again",
      });
   } finally {
      setIsLoading(() => false);
   }
};
