import React from "react";
import useCommerce from "../commerce-context/commerce-context";
import GoToCartButton from "../Functionalities/GoToCartButton";
import Toast from "../Functionalities/Toast";

export default function WishListPage({ setRoute }) {
  const { state, dispatch, showToast } = useCommerce();

  const wishListedItems = state.ProductsList.filter(
    (item) => item.isWishListed
  );

  function ProductsListWishListPage() {
    return (
      <>
        <div className="products-display">
          {wishListedItems.map((item) => (
            <div>
              <div class="card card-shadow">
                <img class="card-img" src={item.image} alt="card"></img>
                <span class="card-name">{item.name}</span>
                <span class="card-tagline">{item.adjective}</span>
                <span class="card-price">Rs.{item.price}</span>
                <div class="card-links">
                  <button
                    class="card-dismiss"
                    onClick={() =>
                      dispatch({ type: "TOGGLE_WISHLIST", payload: item })
                    }
                  >
                    X
                  </button>

                  {item.quantity > 0 ? (
                    <GoToCartButton setRoute={setRoute} />
                  ) : (
                    <button
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
        {showToast === "Show" && <Toast />}
      </>
    );
  }

  return (
    <>
      {wishListedItems.length === 0 && (
        <div className="empty-msg">Wishlist is Empty</div>
      )}
      <ProductsListWishListPage />
    </>
  );
}
