import useCommerce from "../commerce-context/commerce-context";
import CartTotal from "./CartTotal";
import ProductsDisplayCart from "./ProductsDisplayCart";

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
      {cartItems.length === 0 && <div className="empty-msg">Cart is Empty</div>}

      {cartItems.length !== 0 && (
        <CartTotal items={cartItemsNumber} total={cartItemsTotal} />
      )}

      <ProductsDisplayCart cartItems={cartItems} />
    </>
  );
}
