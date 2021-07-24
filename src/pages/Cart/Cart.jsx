import React, { useEffect } from "react";

import { useAuth, useCommerce } from "../../context";
import CartTotal from "./components/CartTotal";
import ProductsDisplayCart from "./components/ProductsDisplayCart";
import { EmptyPage } from "../../components";
import { CheckOutAddressCard } from "./components/CheckOutAddressCard";
import axios from "axios";
import { backendServer } from "../../utils";

export function Cart() {
   const { state } = useCommerce();
   const {
      authState: { user },
   } = useAuth();

   const cartItems = state.UserCart;
   const { deliverTo } = state;
   const { backendApi } = backendServer;

   useEffect(() => {
      document.title = "ecom | cart";
   }, []);

   const loadScript = (src) => {
      return new Promise((resolve) => {
         const script = document.createElement("script");
         script.src = src;
         script.onload = () => {
            resolve(true);
         };
         script.onerror = () => {
            resolve(false);
         };
         document.body.appendChild(script);
      });
   };

   async function displayRazorpay() {
      const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

      if (!res) {
         alert("Razorpay SDK failed to load. Are you online?");
         return;
      }

      const {
         response: { order },
      } = await axios.post(`${backendApi}`);

      console.log(order);

      const options = {
         key: "rzp_test_AvLBL29oCvEXUZ",
         currency: order.currency,
         amount: order.amount.toString(),
         order_id: order.id,
         name: "Donation",
         description: "Thank you for shopping. Keep the game on",
         image: "http://localhost:1337/logo.svg",
         handler: function (response) {
            alert(response.razorpay_payment_id);
            alert(response.razorpay_order_id);
            alert(response.razorpay_signature);
         },
         prefill: {
            name: deliverTo.name,
            email: user.email,
            phone_number: deliverTo.phoneNumber,
         },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
   }

   return (
      <>
         {cartItems.length === 0 ? (
            <EmptyPage page={"Cart"} />
         ) : (
            <div className="cart-layout">
               <ProductsDisplayCart cartItems={cartItems} />
               <div>
                  <CartTotal cartItems={cartItems} checkOut={displayRazorpay} />
                  <CheckOutAddressCard />
               </div>
            </div>
         )}
      </>
   );
}
