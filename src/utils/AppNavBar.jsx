import { NavLink } from "react-router-dom";

import useCommerce from "../context/commerce-context";

export default function AppNavBar() {
  const { state } = useCommerce();

  const itemsInWishList = state.ProductsList.filter(
    (item) => item.isWishListed
  );

  const itemsInCart = state.ProductsList.filter((item) => item.quantity > 0);

  return (
    <>
      <nav class="nav nav-dark">
        <NavLink end activeClassName="activePage" to="/">
          <h3>E-Commerce</h3>
        </NavLink>
        <ul class="nav-list">
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <div class="badge">
              <NavLink to="/wishlist" activeClassName="activePage">
                {" "}
                <i class="fa fa-heart" aria-hidden="true"></i>{" "}
              </NavLink>
              <span class="badge badge-icon">{itemsInWishList.length}</span>
            </div>
          </li>
          <li>
            <div class="badge">
              <NavLink to="/cart" activeClassName="activePage">
                <i class="fa fa-shopping-cart " aria-hidden="true"></i>
              </NavLink>
              <span class="badge badge-icon">{itemsInCart.length}</span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
