import { useState } from "react";

export const routes = {
  Products: "ProductsListingPage",
  Wishilists: "WishlistPage",
  CartItems: "CartPage",
  FilterProducts: "FilterProducts"
};

export default function useRoute() {
  const [route, setRoute] = useState(routes.Products);

  return { route, setRoute };
}
