import React from "react";

import "./account.css";

import { useAuth } from "../../../context";

export function Profile() {
   const {
      authState: { user },
   } = useAuth();

   return (
      <>
         <h3 className="section-header">Profile</h3>
         <div className="user-profile">
            <section>
               <label>Name</label>
               <div>{user.name}</div>
            </section>

            <section>
               <label>Email</label>
               <div>{user.email}</div>
            </section>
         </div>
      </>
   );
}
