import useCommerce from "../context/commerce-context";

import { toggleWishlist } from "../utils";


export function WishlistBttn({item}){

    const {state, dispatch, setIsLoading} = useCommerce();
    const isWishlisted = state.UserWishlist.find(({productId}) => productId._id === item._id)

return(
<>
    <button className="card-dismiss"
        style={{ color: isWishlisted !== undefined ? "red" : "white" }}
        onClick={() => toggleWishlist(dispatch, item, setIsLoading) }
    >
        <i className="fa fa-heart" aria-hidden="true"></i>
    </button>
</>
)
}