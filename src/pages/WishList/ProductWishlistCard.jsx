import { Link } from "react-router-dom";

import useCommerce from "../../context/commerce-context";
import useAuth from "../../context/auth-context/AuthProvider";

import {GoToCartBttn} from "../../components";
import { toggleWishlist, addNewItemToCart} from "../../utils";


export default function ProductWishlistCard({product}){

    const { state, dispatch, setIsLoading } = useCommerce();
    const { authState: { _id } } = useAuth();

return(
<div key={product._id} className={product.inStock ? "card " : "card card-grey-out" }>
    <span style={{ display: product.inStock ? "none" : "inherit" }} className="card-text">
        OUT OF STOCK
    </span>
    <Link to={`/products/${product._id}`}> <img className="card-img" src={product.image} alt="card">
    </img>
    </Link>
    <div className="card-details">
        <span className="card-name">
            <Link to={`/products/${product._id}`}> {product.name} </Link> </span> <span className="card-tagline">
            {product.brand.toUpperCase()}</span>
        <div className="card-price">
            <div className="card-rating">
                {product.rating} <i className="fa fa-star" aria-hidden="true"></i></div>
            <span>₹ {product.price-(product.price*product.discount/100)} &nbsp;
                <s className="text-small text-gray">MRP. ₹{product.price}</s> </span>
            <span className="text-small"> you save ₹ {product.price*product.discount/100}
                <span className="text-small">({product.discount}%off)</span>
            </span>
        </div>
        <div className="card-links">
            <button className="card-dismiss" onClick={()=> toggleWishlist(_id, dispatch, product, setIsLoading) }
                >
                X
            </button>
            { state.UserCart.some((item) => item.productId._id === (product._id) ) ? (
            <GoToCartBttn />
            ) : (
            <button className="bttn bttn-primary" onClick={()=> addNewItemToCart(_id, dispatch, product, setIsLoading) }
                >
                Add To Cart
            </button>
            )}
        </div>
    </div>
</div>

)
}