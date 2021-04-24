import { addNewItemToCart } from "../utils";
import useCommerce from "../context/commerce-context";

export function AddToCartBttn({product}) {

    const { dispatch, setIsLoading } = useCommerce();

return(
<>
    <button disabled={product.inStock ? "" : "true" } className="bttn bttn-primary" onClick={ ()=>
        addNewItemToCart(dispatch, product, setIsLoading) }
        >
        AddToCart
    </button>
</>
)
}