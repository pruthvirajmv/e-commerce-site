import React, { useEffect } from "react";

import ProductsListWishList from "./ProductsListWishList";

export function WishList() {
  useEffect(() => {
    document.title = "ecom | wishlist";
  }, []);

  return (
    <>
      <ProductsListWishList />
    </>
  );
}
