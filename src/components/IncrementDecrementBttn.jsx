import useCommerce from "../context/commerce-context";
import { incrementItemCartQuantity, decrementItemCartQuantity, removeItemFromCart } from "../utils";

export function IncrementDecrementBttn( {product} ) {

  const {state, dispatch, setIsLoading} = useCommerce();
  let inCart = state.UserCart.find((item) => item.productId._id === product._id);
  
  return (
    <>
      <div>
       {  inCart.quantity > 1
       ? <button
          onClick={ () => decrementItemCartQuantity(dispatch, inCart, setIsLoading) }
          className="bttn bttn-primary"
        >
          -
        </button>
        :<button 
          className="bttn bttn-secondary"
          onClick = {() => removeItemFromCart(dispatch, inCart.productId, setIsLoading)}
          >
          <i class="fa fa-trash-o" aria-hidden="true"></i></button>}
        <span> {inCart.quantity} </span>
        <button
          onClick={ () => incrementItemCartQuantity(dispatch, inCart, setIsLoading) }
          className="bttn bttn-primary"
        >
          +
        </button>
      </div>
    </>
  );
}
