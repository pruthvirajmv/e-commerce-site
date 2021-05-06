import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./productDetail.css";

import useCommerce from "../../context/commerce-context";

import { AddToCartBttn, IncrementDecrementBttn, GoToCartBttn, Toast, Loader} from "../../components";
import {findProductIndex, toggleWishlist} from "../../utils";
import useAuth from "../../context/auth-context/AuthProvider";


export function ProductDetail() {
const { productId } = useParams();
const navigate = useNavigate();

const {authState} = useAuth();
const { state, dispatch, setIsLoading } = useCommerce();

let product = state.ProductsList.find(({ _id }) => _id === productId);



if(product === undefined){
return(
<>
  <Loader />
</>
)
}

useEffect(() => {
document.title = "ecom | product";
}, []);

return (
<>
  <div className="product-detail">
  <img className="card-img" src={product.image} alt="card"></img>
    <div key={product._id} className="card">
      <div className="card-details">
        <span className="card-name">{product.name}</span>
        <span className="card-tagline">{product.brand}</span>
        <div className="card-price">
          <div className="card-rating">
            {product.rating} <i className="fa fa-star" aria-hidden="true"></i></div>
          <span>₹ {product.price-(product.price*product.discount/100)} &nbsp;
            <s className="text-small text-gray">MRP. ₹{product.price}</s> </span>
          <span className="text-small"> you save ₹ {product.price*product.discount/100}
            <span className="text-small">({product.discount}%off)</span>
          </span>
        </div>

        <div className="card-body">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>

        <div className="card-links">
          <div>
          <button 
          className="bttn bttn-secondary" 
          onClick={ () => authState.isUserLoggedIn ? toggleWishlist(authState._id, dispatch, item, setIsLoading) : navigate("/login") }
          >
           {findProductIndex(state.UserWishlist, product._id) >= 0 
           ?<span> <i className="fa fa-heart" aria-hidden="true" style={{color: "red"}}></i> Wishlisted </span>
           : <span> <i className="fa fa-heart" aria-hidden="true"></i> AddToWishlist</span>}
          </button>
          </div>
          <div  className="card-links-cart">
          { findProductIndex(state.UserCart, product._id) >= 0 ? (
          <>
            <IncrementDecrementBttn product={product} />
            <GoToCartBttn />
          </>
          ) : (
              <AddToCartBttn product={product} />
          )}
          </div>
        </div>
      </div>
    </div>
  </div>
  {state.Toast.status === "Show" &&
  <Toast />}
</>
);
}