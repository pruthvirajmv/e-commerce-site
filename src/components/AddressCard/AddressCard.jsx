import React, { useState } from "react";

import "./addressCard.css";

import { useAuth, useCommerce } from "../../context";
import useAddressForm from "../../pages/User/Account/Addresses/addressform/useAddressForm";
import { userAddressManagement } from "../../utils/server-requests";
import { AddNewAddressModal } from "../AddressModal/AddNewAddressModal";

export function AddressCard({ address }) {
   const {
      setIsLoading,
      dispatch,
      state: { deliverTo },
   } = useCommerce();
   const { authDispatch } = useAuth();
   const { addressFormDispatch } = useAddressForm();

   const [editAddress, setEditAddress] = useState(false);

   const removeBttnHandler = () => {
      const type = "remove";
      const addressMangementArgs = {
         type,
         address,
         setIsLoading,
         authDispatch,
         dispatch,
         addressFormDispatch,
      };
      userAddressManagement(addressMangementArgs);
   };
   const editBttnHandler = () => {
      setEditAddress(true);
   };

   return (
      <div key={address?._id}>
         <h4>{address?.name} </h4>
         <p>{address?.street} </p>
         <p>
            {address?.city}, {address?.state} {address?.pincode}
         </p>
         <p> {address?.country} </p>
         <p> Phone Number: {address?.phoneNumber} </p>
         <div className="addresCard-actions">
            <button className="bttn bttn-primary" onClick={editBttnHandler}>
               Edit
            </button>
            <button className="bttn bttn-secondary" onClick={removeBttnHandler}>
               Delete
            </button>
            <button
               className="bttn bttn-secondary"
               onClick={() => dispatch({ type: "SET_DELIVERY_ADDRESS", payload: address })}
               disabled={deliverTo?._id === address._id ? true : ""}>
               {deliverTo?._id === address._id ? "Default" : "Make Default"}
            </button>
         </div>
         <AddNewAddressModal
            open={editAddress}
            onClose={() => setEditAddress(false)}
            address={address}
         />
      </div>
   );
}
