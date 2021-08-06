import { Link } from "react-router-dom";

import { useCommerce, useAuth } from "../../../context";

import { IncrementDecrementBttn, WishlistBttn } from "../../../components";
import { removeItemFromCart, moveToWishlistFromCart } from "../../../utils/server-requests";

export default function ProductCartCard({ product, quantity }) {
   const { state, dispatch, setIsLoading } = useCommerce();
   const {
      authState: { _id },
   } = useAuth();

   return (
      <div className="card card-horizontal">
         <div className="card-img">
            <Link to={`/products/${product._id}`}>
               {" "}
               <img className="card-img" src={product.image} alt="card"></img>
            </Link>
         </div>
         <div className="card-side-txt">
            <span className="card-name">
               <Link to={`/products/${product._id}`}> {product.name} </Link>{" "}
            </span>{" "}
            <span className="card-tagline">{product.brand.toUpperCase()}</span>
            <div className="card-price">
               <div>
                  <span>
                     ₹ {(product.price - (product.price * product.discount) / 100) * quantity}{" "}
                     &nbsp;
                     <s className="text-small text-gray">MRP. ₹{product.price}</s>{" "}
                  </span>
               </div>
               <span className="text-small">
                  {" "}
                  you save ₹ {((product.price * product.discount) / 100) * quantity}
                  <span className="text-small">({product.discount}%off)</span>
               </span>
            </div>
            <WishlistBttn item={product} />
            <div>
               <IncrementDecrementBttn product={product} />
            </div>
            <div className="card-links">
               <button
                  onClick={() => removeItemFromCart(dispatch, product, setIsLoading)}
                  className="bttn bttn-secondary">
                  Remove
               </button>
               <button
                  className="bttn bttn-primary"
                  onClick={() => moveToWishlistFromCart(state, dispatch, product, setIsLoading)}>
                  MoveToWishlist
               </button>
            </div>
         </div>
      </div>
   );
}
