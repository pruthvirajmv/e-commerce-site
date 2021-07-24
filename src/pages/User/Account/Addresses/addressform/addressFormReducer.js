import { AddressFormActionType } from "./AddressFormActionType";
import { addressFormInitialState } from "./useAddressForm";

export const addressFormReducer = (state, { type, payload }) => {
   switch (type) {
      case AddressFormActionType.SET_INITIAL_ADDRESS:
         return {
            ...state,
            address: payload,
         };

      case AddressFormActionType.SET_ATTENTION_NAME:
         return {
            ...state,
            address: { ...state.address, name: payload },
         };

      case AddressFormActionType.SET_HOUSE:
         return {
            ...state,
            address: { ...state.address, house: payload },
         };

      case AddressFormActionType.SET_STREET:
         return {
            ...state,
            address: { ...state.address, street: payload },
         };
      case AddressFormActionType.SET_CITY:
         return {
            ...state,
            address: { ...state.address, city: payload },
         };

      case AddressFormActionType.SET_PINCODE:
         return {
            ...state,
            address: { ...state.address, pincode: payload },
         };

      case AddressFormActionType.SET_STATE:
         return {
            ...state,
            address: { ...state.address, state: payload },
         };

      case AddressFormActionType.SET_COUNTRY:
         return {
            ...state,
            address: { ...state.address, country: payload },
         };

      case AddressFormActionType.SET_PHONENUMBER:
         return {
            ...state,
            address: { ...state.address, phoneNumber: payload },
         };

      case AddressFormActionType.SET_ERROR_MESSAGE:
         return {
            ...state,
            errorMessage: payload,
         };

      case AddressFormActionType.RESET_FORM:
         return addressFormInitialState;

      default:
         return state;
   }
};
