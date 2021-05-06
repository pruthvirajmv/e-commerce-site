import useAuth from "../context/auth-context/AuthProvider";
import useCommerce from "../context/commerce-context";
import { incrementItemCartQuantity, decrementItemCartQuantity, removeItemFromCart } from "../utils";

export function IncrementDecrementBttn( {product} ) {

  const {state, dispatch, setIsLoading} = useCommerce();
  const { authState: { _id } } = useAuth();

  let inCart = state.UserCart.find((item) => item.productId._id === product._id);
  
  return (
    <>
      <div>
       {  inCart.quantity > 1
       ? <button
          onClick={ () => decrementItemCartQuantity(_id, dispatch, inCart, setIsLoading) }
          className="bttn bttn-primary"
        >
          -
        </button>
        :<button 
          className="bttn bttn-secondary"
          onClick = {() => removeItemFromCart(_id, dispatch, inCart.productId, setIsLoading)}
          >
          <i className="fa fa-trash-o" aria-hidden="true"></i></button>}
        <span> {inCart.quantity} </span>
        <button
          onClick={ () => incrementItemCartQuantity(_id, dispatch, inCart, setIsLoading) }
          className="bttn bttn-primary"
        >
          +
        </button>
      </div>
    </>
  );
}
