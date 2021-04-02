import "./cartPage.css";

export default function CartTotal({ items, total }) {
  return (
    <>
      <div class="cart-sum-card">
        <div class="card cart-sum-card">
          <div class="card-title">
            <h3>Cart Total</h3>
          </div>
          <div class="card-body">
            <p>Number of Items: {items} </p>
            <p>Delivery Charge: FREE </p>
          </div>
          <p>
            Your Cart Total: <strong>{total} Rs</strong>{" "}
          </p>
          <div class="card-links">
            <span>
              <button class="bttn bttn-primary">Checkout</button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
