import ToastComponent from "../Functionalities/ToastComponent";
import useCommerce from "../commerce-context/commerce-context";

export default function ProductsDisplayCart({ cartItems }) {
  const { state, dispatch } = useCommerce();

  return (
    <>
      <div className="products-display-cart">
        {cartItems.map((item) => (
          <div>
            <div class="card card-horizontal">
              <img class="card-img" src={item.image} alt="card"></img>
              <div class="card-side-txt">
                <span class="card-name">{item.name}</span>
                <span class="card-tagline">{item.adjective}</span>
                <span class="card-price">Rs.{item.price * item.quantity}</span>
                <button
                  class="card-dismiss"
                  style={{ color: item.isWishListed ? "red" : "white" }}
                  onClick={() =>
                    dispatch({ type: "TOGGLE_WISHLIST", payload: item })
                  }
                >
                  <i class="fa fa-heart" aria-hidden="true"></i>
                </button>
                <div class="card-links">
                  <div>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "DECREMENT_CART_QUANTITY",
                          payload: item
                        })
                      }
                      class="bttn bttn-primary"
                    >
                      -
                    </button>
                    <span> {item.quantity} </span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: "INCREMENT_CART_QUANTITY",
                          payload: item
                        })
                      }
                      class="bttn bttn-primary"
                    >
                      +
                    </button>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      columnGap: "0.5rem"
                    }}
                  >
                    <button
                      onClick={() =>
                        dispatch({ type: "REMOVE_FROM_CART", payload: item })
                      }
                      class="bttn bttn-secondary"
                    >
                      Remove
                    </button>
                    <button
                      class="bttn bttn-primary"
                      onClick={() =>
                        dispatch({ type: "MOVE_TO_WISHLIST", payload: item })
                      }
                    >
                      MoveToWishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {state.Toast.status === "Show" && <ToastComponent />}
      </div>
    </>
  );
}
