import { addNewItemToCart } from "../utils";
import useCommerce from "../context/commerce-context";
import useAuth from "../context/auth-context/AuthProvider";
import { useNavigate } from "react-router";

export function AddToCartBttn({product}) {

    const navigate = useNavigate();

    const { authState } = useAuth();
    const { dispatch, setIsLoading } = useCommerce();

    const onClickHandler = () =>{
        authState.isUserLoggedIn ? addNewItemToCart(dispatch, product, setIsLoading) : navigate("/login")
    }

return(
<>
    <button disabled={product.inStock ? "" : "true" } className="bttn bttn-primary" onClick={ onClickHandler}
        >
        AddToCart
    </button>
</>
)
}