import React from "react";

import { useCommerce } from "../../context";
import { Toast, EmptyPage } from "../../components";
import ProductWishlistCard from "./ProductWishlistCard";

export default function ProductsListWishListPage() {
   const { state } = useCommerce();

   let wishListedItems = state.UserWishlist;

   return (
      <>
         {wishListedItems.length === 0 && <EmptyPage page={"Wishlist"} />}
         <div className="products-display card-wishlist">
            {wishListedItems.map(({ productId }) => (
               <ProductWishlistCard product={productId} />
            ))}
         </div>
         {state.Toast.status === "Show" && <Toast />}
      </>
   );
}
