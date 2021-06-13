import { Link } from "react-router-dom";

import { WishlistBttn, GoToCartBttn, AddToCartBttn } from "../../../components";
import { useCommerce } from "../../../context";

export default function ProductListingCard({ product }) {
   const { state } = useCommerce();

   return (
      <div key={product._id} className={product.inStock ? "card " : "card card-grey-out"}>
         <span style={{ display: product.inStock ? "none" : "inherit" }} className="card-text">
            OUT OF STOCK
         </span>
         <Link to={`/products/${product._id}`}>
            {" "}
            <img className="card-img" src={product.image} alt="card"></img>
         </Link>
         <div className="card-details">
            <span className="card-name">
               <Link to={`/products/${product._id}`}> {product.name} </Link>{" "}
            </span>{" "}
            <span className="card-tagline">{product.brand.toUpperCase()}</span>
            <div className="card-price">
               <div className="card-rating">
                  {product.rating} <i className="fa fa-star" aria-hidden="true"></i>
               </div>
               <span>
                  ₹ {product.price - (product.price * product.discount) / 100} &nbsp;
                  <s className="text-small text-gray">MRP. ₹{product.price}</s>{" "}
               </span>
               <span className="text-small">
                  {" "}
                  you save ₹ {(product.price * product.discount) / 100}
                  <span className="text-small">({product.discount}%off)</span>
               </span>
            </div>
            <div className="card-links">
               {state.UserCart.some((item) => item.productId._id === product._id) ? (
                  <GoToCartBttn />
               ) : (
                  <AddToCartBttn product={product} />
               )}
            </div>
            <WishlistBttn item={product} />
         </div>
      </div>
   );
}
