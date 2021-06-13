import { useAuth, useCommerce } from "../context";
import {
   incrementItemCartQuantity,
   decrementItemCartQuantity,
   removeItemFromCart,
} from "../utils/server-requests";

export function IncrementDecrementBttn({ product }) {
   const { state, dispatch, setIsLoading } = useCommerce();
   const {
      authState: { _id },
   } = useAuth();

   let inCart = state.UserCart.find((item) => item.productId._id === product._id);

   return (
      <>
         <div>
            {inCart.quantity > 1 ? (
               <button
                  onClick={() => decrementItemCartQuantity(dispatch, inCart, setIsLoading)}
                  className="bttn bttn-primary">
                  -
               </button>
            ) : (
               <button
                  className="bttn bttn-secondary"
                  onClick={() => removeItemFromCart(dispatch, inCart.productId, setIsLoading)}>
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
               </button>
            )}
            <span> {inCart.quantity} </span>
            <button
               onClick={() => incrementItemCartQuantity(dispatch, inCart, setIsLoading)}
               className="bttn bttn-primary">
               +
            </button>
         </div>
      </>
   );
}
