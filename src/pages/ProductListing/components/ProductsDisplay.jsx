import { useCommerce } from "../../../context";

import { Toast } from "../../../components";
import ProductListingCard from "./ProductListingCard";

export default function ProductsDisplay({ filteredData }) {
   const { state } = useCommerce();

   return (
      <>
         <div className="products-display">
            {filteredData.length === 0 && <h3>No products found...</h3>}
            {filteredData.map((item) => (
               <ProductListingCard key={item._id} product={item} />
            ))}
         </div>
         {state.Toast.status === "Show" && <Toast />}{" "}
      </>
   );
}
