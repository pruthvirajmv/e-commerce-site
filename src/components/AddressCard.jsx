import React from "react";

export function AddressCard({ address }) {
   return (
      <>
         <h4>{address.name} </h4>
         <p>{address.street} </p>
         <p>
            {address.city}, {address.state} {address.pincode}
         </p>
         <p> {address.Country} </p>
         <p> Phone Number: {address.phoneNumber} </p>
         <div>
            <button>Edit</button> <button>Remove</button>z
         </div>
      </>
   );
}
