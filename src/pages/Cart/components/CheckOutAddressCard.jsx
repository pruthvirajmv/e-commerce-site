import React from "react";
import { useNavigate } from "react-router-dom";
import { useCommerce } from "../../../context";

import "../cart.css";

export function CheckOutAddressCard() {
   const {
      state: { deliverTo },
   } = useCommerce();
   const navigate = useNavigate();

   return (
      <div className="checkOutAddressCard">
         <div className="card ">
            <div className="card-title">
               <h3>Delivery To</h3>
            </div>
            <div className="card-body">
               <h4>{deliverTo?.name} </h4>
               <p>{deliverTo?.street} </p>
               <p>
                  {deliverTo?.city}, {deliverTo?.state} {deliverTo?.pincode}
               </p>
               <p> {deliverTo?.country} </p>
               <p> Phone Number: {deliverTo?.phoneNumber} </p>
            </div>
            <div className="card-links">
               <button className="bttn bttn-primary" onClick={() => navigate("/account/addresses")}>
                  Change Address
               </button>
            </div>
         </div>
      </div>
   );
}
