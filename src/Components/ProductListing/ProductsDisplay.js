import IncrementDecrementButton from "../Functionalities/IncrementDecrementButton";
import GoToCartButton from "../Functionalities/GoToCartButton";
import ToastComponent from "../Functionalities/ToastComponent";
import useCommerce from "../commerce-context/commerce-context";

export default function ProductsDisplay({ filteredData, setRoute }) {
  const { state, dispatch } = useCommerce();

  return (
    <>
      <div className="products-display">
        {filteredData.map((item) => (
          <div
            key={item.id}
            class={item.inStock ? "card " : "card card-grey-out"}
          >
            <span
              style={{ display: item.inStock ? "none" : "inherit" }}
              class="card-text"
            >
              OUT OF STOCK
            </span>
            <img class="card-img" src={item.image} alt="card"></img>
            <div className="card-details">
              <span class="card-name">{item.name}</span>
              <span class="card-tagline">{item.adjective}</span>
              <span class="card-price">Rs.{item.price}</span>
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
                {item.quantity > 0 ? (
                  <>
                    <IncrementDecrementButton
                      clickHandler={dispatch}
                      value={item}
                    />
                    <GoToCartButton setRoute={setRoute} />
                  </>
                ) : (
                  <button
                    disabled={item.inStock ? "" : "true"}
                    class="bttn bttn-primary"
                    onClick={() =>
                      dispatch({ type: "ADD_TO_CART", payload: item })
                    }
                  >
                    AddToCart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {state.Toast.status === "Show" && <ToastComponent />}{" "}
    </>
  );
}
