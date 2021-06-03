import { useCommerce } from "../../../context";

import { Toast } from "../../../components";
import ProductListingCard from "./ProductListingCard";

export default function ProductsDisplay({ filteredData }) {
   const { state } = useCommerce();

   return (
      <>
         <div className="products-display">
            {filteredData.map((item) => (
               <ProductListingCard key={item._id} product={item} />
            ))}
         </div>
         {state.Toast.status === "Show" && <Toast />}{" "}
      </>
   );
}
