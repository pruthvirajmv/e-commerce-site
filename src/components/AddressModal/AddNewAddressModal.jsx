import React, { useEffect } from "react";
import { useAuth, useCommerce } from "../../context";
import { AddressFormActionType } from "../../pages/User/Account/Addresses/addressform/AddressFormActionType";
import useAddressForm from "../../pages/User/Account/Addresses/addressform/useAddressForm";
import { userAddressManagement } from "../../utils/server-requests";

import "./addressModal.css";

export function AddNewAddressModal({ open, onClose, address }) {
   const { authDispatch } = useAuth();
   const { setIsLoading, dispatch } = useCommerce();

   const { addressFormState, addressFormDispatch } = useAddressForm();

   const { name, house, street, city, state, country, pincode, phoneNumber } =
      addressFormState.address;

   useEffect(() => {
      address &&
         addressFormDispatch({ type: AddressFormActionType.SET_INITIAL_ADDRESS, payload: address });
   }, []);

   const addressSubmitHandler = (e) => {
      console.log(String(phoneNumber).length);
      e.preventDefault();
      if (
         !(
            name !== "" &&
            house !== "" &&
            street !== "" &&
            city !== "" &&
            state !== "" &&
            country !== "" &&
            pincode !== "" &&
            phoneNumber !== ""
         )
      ) {
         return addressFormDispatch({
            type: AddressFormActionType.SET_ERROR_MESSAGE,
            payload: "please fill all the details",
         });
      }
      if (String(phoneNumber).length !== 10) {
         return addressFormDispatch({
            type: AddressFormActionType.SET_ERROR_MESSAGE,
            payload: "please enter 10 digit phone number",
         });
      }
      const type = address ? "update" : "add";
      const newAddress = addressFormState.address;
      const addressMangementArgs = {
         type,
         address: newAddress,
         setIsLoading,
         authDispatch,
         dispatch,
         addressFormDispatch,
         onClose,
      };
      userAddressManagement(addressMangementArgs);
   };

   return (
      <>
         {open && (
            <div className="modal-container">
               <div className="modal">
                  <div className="modal-title">
                     <h3>Delivery Address</h3>
                  </div>
                  <div className="modal-body">
                     <form className="form-container">
                        <section>
                           <input
                              className="input input-primary"
                              type="text"
                              value={name}
                              onFocus={() =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_ERROR_MESSAGE,
                                    payload: "",
                                 })
                              }
                              onChange={(e) =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_ATTENTION_NAME,
                                    payload: e.target.value,
                                 })
                              }
                              placeholder="enter full name"
                              required></input>
                        </section>
                        <section>
                           <input
                              className="input input-primary"
                              type="text"
                              value={house}
                              onFocus={() =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_ERROR_MESSAGE,
                                    payload: "",
                                 })
                              }
                              onChange={(e) =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_HOUSE,
                                    payload: e.target.value,
                                 })
                              }
                              placeholder="enter house no., building name"
                              required></input>
                        </section>
                        <section>
                           <input
                              className="input input-primary"
                              type="text"
                              value={street}
                              onFocus={() =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_ERROR_MESSAGE,
                                    payload: "",
                                 })
                              }
                              onChange={(e) =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_STREET,
                                    payload: e.target.value,
                                 })
                              }
                              placeholder="enter street, area"
                              required></input>
                        </section>
                        <section>
                           <input
                              className="input input-primary"
                              type="text"
                              value={city}
                              onFocus={() =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_ERROR_MESSAGE,
                                    payload: "",
                                 })
                              }
                              placeholder="enter city"
                              onChange={(e) =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_CITY,
                                    payload: e.target.value,
                                 })
                              }
                              required></input>
                        </section>
                        <section>
                           <input
                              className="input input-primary"
                              type="text"
                              minLength={6}
                              maxLength={6}
                              value={pincode}
                              placeholder="enter pincode"
                              onChange={(e) =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_PINCODE,
                                    payload: e.target.value,
                                 })
                              }
                              required></input>
                        </section>
                        <section>
                           <select
                              className="input input-primary"
                              type="text"
                              value={state}
                              onChange={(e) =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_STATE,
                                    payload: e.target.value,
                                 })
                              }
                              required>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Delhi">Delhi</option>
                           </select>
                        </section>
                        <section>
                           <select
                              className="input input-primary"
                              value={country}
                              onChange={(e) =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_COUNTRY,
                                    payload: e.target.value,
                                 })
                              }
                              required>
                              <option value="India">India</option>
                           </select>
                        </section>
                        <section>
                           <input
                              className="input input-primary"
                              type="text"
                              minLength={10}
                              maxLength={10}
                              onFocus={() =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_ERROR_MESSAGE,
                                    payload: "",
                                 })
                              }
                              value={phoneNumber}
                              placeholder="enter 10 digits phone number"
                              onChange={(e) =>
                                 addressFormDispatch({
                                    type: AddressFormActionType.SET_PHONENUMBER,
                                    payload: e.target.value,
                                 })
                              }
                              required></input>
                        </section>
                        <footer>
                           <button
                              type="submit"
                              onClick={addressSubmitHandler}
                              className="bttn bttn-primary">
                              {address ? "Update" : "Add"}
                           </button>
                           <button onClick={onClose} className="bttn bttn-secondary">
                              Cancel
                           </button>
                        </footer>
                     </form>
                  </div>
                  <p>{addressFormState.errorMessage}</p>
               </div>
            </div>
         )}
      </>
   );
}
