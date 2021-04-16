import React from "react";
import { Link } from "react-router-dom";

import useCommerce from "../../context/commerce-context";
import GoToCartButton from "../../utils/GoToCartButton";
import ToastComponent from "../../utils/ToastComponent";
import EmptyPage from "../../utils/EmptyPage";

export default function ProductsListWishListPage() {
  const { state, dispatch } = useCommerce();

  const wishListedItems = state.ProductsList.filter(
    (item) => item.isWishListed
  );

  return (
    <>
      {wishListedItems.length === 0 && <EmptyPage page={"Wishlist"} />}
      <div className="products-display">
        {wishListedItems.map((item) => (
          <div class="card">
            <div className="card-img">
              <Link to={`/products/${item.id}`}>
                <img class="card-img" src={item.image} alt="card"></img>
              </Link>
            </div>
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
                <GoToCartButton />
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
        ))}
      </div>
      {state.Toast.status === "Show" && <ToastComponent />}
    </>
  );
}
