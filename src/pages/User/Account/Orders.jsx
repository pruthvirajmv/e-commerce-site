import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./account.css";

import { useCommerce } from "../../../context";
import { backendServer } from "../../../utils";
import { AddressCard } from "../../../components";

export function Orders() {
   const { backendApi } = backendServer;
   const {
      state: { Orders },
      dispatch,
      setIsLoading,
   } = useCommerce();

   useEffect(() => {
      (async () => {
         try {
            setIsLoading(true);
            const {
               data: { orders },
            } = await axios.get(`${backendApi}/order`);
            dispatch({ type: "LOAD_USER_ORDERS", payload: orders });
         } catch (err) {
            console.error(err);
         } finally {
            setIsLoading(false);
         }
      })();
   }, []);

   return (
      <>
         <h3 className="section-header">Orders</h3>
         {Orders.map((order) => (
            <div className="order-card">
               <p>Order Amount: Rs.{order.amount}</p>
               <p>Delivered: {order.delivered.slice(0, 10)}</p>
               <div>
                  <p>Shipped To:</p>
                  <AddressCard address={order.shipTo} type="order" />
               </div>
               {order.cartItems.map(({ productId, quantity }) => (
                  <div className="card card-horizontal">
                     <div className="card-img">
                        <Link to={`/products/${productId._id}`}>
                           <img className="card-img" src={productId.image} alt="card"></img>
                        </Link>
                     </div>
                     <div className="card-side-txt">
                        <span className="card-name">
                           <Link to={`/products/${productId._id}`}> {productId.name} </Link>
                        </span>
                        <span className="card-tagline">{productId.brand.toUpperCase()}</span>
                        <div className="card-price">
                           <div>
                              <span>
                                 ₹{productId.price - (productId.price * productId.discount) / 100}
                              </span>
                              <span> | Qty: {quantity}</span>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         ))}
      </>
   );
}
