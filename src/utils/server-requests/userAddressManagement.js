import axios from "axios";
import { backendServer } from "../index";
import { AddressFormActionType } from "../../pages/User/Account/Addresses/addressform/AddressFormActionType";

export const userAddressManagement = async (addressMangementParam) => {
   const { backendApi } = backendServer;
   const { type, address, setIsLoading, authDispatch, dispatch, addressFormDispatch, onClose } =
      addressMangementParam;

   try {
      setIsLoading(() => true);
      const {
         data: { addresses },
      } = await axios.post(`${backendApi}/user/addresses/${type}`, { address });
      authDispatch({ type: "UPDATE_DELIVERY_ADDRESSES", payload: addresses });

      switch (type) {
         case "add":
            onClose();
            addressFormDispatch({
               type: AddressFormActionType.RESET_FORM,
            });
            dispatch({ type: "SHOW_TOAST", payload: "new address added" });
            return;
         case "update":
            onClose();
            addressFormDispatch({
               type: AddressFormActionType.RESET_FORM,
            });
            dispatch({ type: "SHOW_TOAST", payload: "address updated" });
            return;
         case "remove":
            dispatch({ type: "SHOW_TOAST", payload: "address removed" });
            return;
         default:
            return authDispatch({ type: "SHOW_TOAST", payload: "addresses updated" });
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
