import React, { useEffect } from "react";

import ProductsListWishList from "./ProductsListWishList";

export default function WishListPage() {
  useEffect(() => {
    document.title = "ecom | wishlist";
  }, []);

  return (
    <>
      <ProductsListWishList />
    </>
  );
}
