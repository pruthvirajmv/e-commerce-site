import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import "./productDetail.css";

import useCommerce from "../../context/commerce-context";

import IncrementDecrementButton from "../../utils/IncrementDecrementButton";
import GoToCartButton from "../../utils/GoToCartButton";
import ToastComponent from "../../utils/ToastComponent";

export default function ProductDetailPage() {
  const { productId } = useParams();

  const { state, dispatch } = useCommerce();

  const product = state.ProductsList.find(({ id }) => id === productId);

  useEffect(() => {
    document.title = "ecom | product";
  }, []);

  return (
    <>
      <div className="product-detail">
        <div key={product.id} className="card card-horizontal">
          <img class="card-img" src={product.image} alt="card"></img>
          <div className="card-details">
            <span class="card-name">{product.name}</span>
            <span class="card-tagline">{product.adjective}</span>
            <span class="card-price">Rs.{product.price}</span>
            <button
              class="card-dismiss"
              style={{ color: product.isWishListed ? "red" : "white" }}
              onClick={() =>
                dispatch({ type: "TOGGLE_WISHLIST", payload: product })
              }
            >
              <i class="fa fa-heart" aria-hidden="true"></i>
            </button>

            <div class="card-links">
              {product.quantity > 0 ? (
                <>
                  <IncrementDecrementButton
                    clickHandler={dispatch}
                    value={product}
                  />
                  <GoToCartButton />
                </>
              ) : (
                <button
                  disabled={product.inStock ? "" : "true"}
                  class="bttn bttn-primary"
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: product })
                  }
                >
                  AddToCart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {state.Toast.status === "Show" && <ToastComponent />}{" "}
    </>
  );
}
