import { Toast } from "../../../components";
import { useCommerce } from "../../../context";
import ProductCartCard from "./ProductCartCard";

export default function ProductsDisplayCart({ cartItems }) {
   const { state } = useCommerce();

   return (
      <>
         <div className="products-display-cart">
            {cartItems.map(({ productId, quantity }) => (
               <ProductCartCard product={productId} quantity={quantity} />
            ))}
            {state.Toast.status === "Show" && <Toast />}
         </div>
      </>
   );
}
