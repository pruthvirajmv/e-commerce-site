import { useNavigate } from "react-router";
import useAuth from "../context/auth-context/AuthProvider";
import useCommerce from "../context/commerce-context";

import { toggleWishlist } from "../utils";


export function WishlistBttn({item}){

    const navigate = useNavigate();
    const {authState} = useAuth();

    const {state, dispatch, setIsLoading} = useCommerce();
    const isWishlisted = state.UserWishlist.find(({productId}) => productId._id === item._id)

    const onClickHandler = () =>{
        authState.isUserLoggedIn ? toggleWishlist(authState._id, dispatch, item, setIsLoading) : navigate("/login")
    }

return(
<>
    <button className="card-dismiss"
        style={{ color: isWishlisted !== undefined ? "red" : "white" }}
        onClick={onClickHandler}
    >
        <i className="fa fa-heart" aria-hidden="true"></i>
    </button>
</>
)
}