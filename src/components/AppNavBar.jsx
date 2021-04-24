import { NavLink } from "react-router-dom";

import useCommerce from "../context/commerce-context";

export function AppNavBar() {
  const { state } = useCommerce();

  const itemsInWishList = state.UserWishlist;

  const itemsInCart = state.UserCart;

  return (
    <>
      <nav className="nav nav-dark">
        <NavLink end activeClassName="activePage" to="/">
          <h3>E-Commerce</h3>
        </NavLink>
        <ul className="nav-list">
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <div className="badge">
              <NavLink to="/wishlist" activeClassName="activePage">
                {" "}
                <i className="fa fa-heart" aria-hidden="true"></i>{" "}
              </NavLink>
              <span className="badge badge-icon">{itemsInWishList.length}</span>
            </div>
          </li>
          <li>
            <div className="badge">
              <NavLink to="/cart" activeClassName="activePage">
                <i className="fa fa-shopping-cart " aria-hidden="true"></i>
              </NavLink>
              <span className="badge badge-icon">{itemsInCart.length}</span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
