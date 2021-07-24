import React, { useState } from "react";
import { AddNewAddressModal, AddressCard } from "../../../../components";
import { useAuth, useCommerce } from "../../../../context";

import "../account.css";
import "./address.css";

export function Addresses() {
   const {
      state: { deliverTo },
   } = useCommerce();

   const {
      authState: { user },
   } = useAuth();

   const addresses = user.addresses;

   const [addressModal, setAddressModal] = useState(false);

   return (
      <>
         <h3 className="section-header">Adresses</h3>
         <div className="addresses-display">
            {addresses.length > 0 &&
               addresses.map((address) => <AddressCard address={address} key={address._id} />)}
         </div>
         <button className="bttn bttn-secondary" onClick={() => setAddressModal(true)}>
            + add new address
         </button>
         <AddNewAddressModal open={addressModal} onClose={() => setAddressModal(false)} />
      </>
   );
}
