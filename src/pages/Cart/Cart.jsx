import React from "react";

import useCommerce from "../../context/commerce-context";
import CartTotal from "./components/CartTotal";
import ProductsDisplayCart from "./components/ProductsDisplayCart";
import EmptyPage from "../../utils/EmptyPage";

export default function CartPage() {
  const { state } = useCommerce();

  const cartItems = state.ProductsList.filter((item) => item.quantity > 0);
  const cartItemsNumber = cartItems.reduce(
    (orderSum, item) => (orderSum = orderSum + item.quantity),
    0
  );

  const cartItemsTotal = cartItems.reduce(
    (orderSum, item) => (orderSum = orderSum + item.quantity * item.price),
    0
  );

  return (
    <>
      {cartItems.length === 0 && <EmptyPage page={"Cart"} />}

      {cartItems.length !== 0 && (
        <CartTotal items={cartItemsNumber} total={cartItemsTotal} />
      )}

      <ProductsDisplayCart cartItems={cartItems} />
    </>
  );
}
