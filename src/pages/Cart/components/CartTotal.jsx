import "../cart.css";

export default function CartTotal({ cartItems}) {

  const cartItemsNumber = cartItems.reduce(
    (orderSum, item) => (orderSum = orderSum + item.quantity),
    0
  );

  let cartItemsTotal = cartItems.reduce(
    (orderSum, item) => (orderSum = orderSum + item.quantity * item.productId.price),
    0
  );

  cartItemsTotal = cartItemsTotal.toFixed(2);

  let cartItemsTotalDiscount = cartItems.reduce(
    (orderSum, item) => (orderSum = orderSum + item.quantity * item.productId.price * item.productId.discount / 100),
    0
  );

  cartItemsTotalDiscount = cartItemsTotalDiscount.toFixed(2);



  return (
    <>
      <div className="cart-sum-card">
        <div className="card ">
          <div className="card-title">
            <h3>Order Summary</h3>
          </div>
          <div className="card-body">
            <section>
              <span>Number of Items</span>
              <span>{cartItemsNumber}</span>
            </section>
            <section>
              <span>Cart Total</span>
              <span>₹ {cartItemsTotal}</span>
            </section>
            <section>
                <p>Cart Discount</p>
              <div>
              <span>- ₹ {cartItemsTotalDiscount}</span>
              <p className="text-small text-gray">(you saved)</p>
              </div>
            </section>
            <section>
              <span>Delivery Charge</span>
              <span>FREE</span>
            </section>
            <section>
              <span>Order Total</span>
              <span><strong>₹ {(cartItemsTotal - cartItemsTotalDiscount).toFixed(2)}</strong></span>
            </section>
          </div>
          <div className="card-links">
              <button className="bttn bttn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}
