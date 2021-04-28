import React, { useEffect } from "react";

import useCommerce from "../../context/commerce-context";
import CartTotal from "./components/CartTotal";
import ProductsDisplayCart from "./components/ProductsDisplayCart";
import { EmptyPage }from "../../components";

export function Cart() {
  const { state } = useCommerce();

  const cartItems = state.UserCart;



  useEffect(() => {
    document.title = "ecom | cart";
  }, []);

  return (
    <>
      {
        cartItems.length === 0 
        ? <EmptyPage page={"Cart"} />
        : <div className="cart-layout" >
            <ProductsDisplayCart cartItems={cartItems} />
            <CartTotal cartItems={cartItems} />
          </div>
      }
    </>
  );
}
