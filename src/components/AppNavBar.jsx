import { NavLink } from "react-router-dom";
import useAuth from "../context/auth-context/AuthProvider";

import useCommerce from "../context/commerce-context";

export function AppNavBar() {
  const { state } = useCommerce();
  const {authState} = useAuth();

  const itemsInWishList = state.UserWishlist;

  const itemsInCart = state.UserCart;

  return (
    <>
      <nav className="nav nav-dark">
      <div className="nav-main">
        <h3 className="nav-brand" ><NavLink end activeClassName="activePage" to="/">
            BaddyMart
          </NavLink></h3>
          <h3><NavLink activeClassName="activePage" to="/products">Shop</NavLink></h3>
        </div>
        <ul className="nav-list">
          <li>
            <div className="badge">
              <NavLink to="/wishlist" activeClassName="activePage">
                {" "}
                <i className="fa fa-heart" aria-hidden="true"></i>{" "}
              </NavLink>
              <span className="badge badge-icon wishlist">{itemsInWishList.length}</span>
            </div>
            <span className="nav-icon-name">Wishlist</span>
          </li>
          <li>
            <div className="badge">
              <NavLink to="/cart" activeClassName="activePage">
                <i className="fa fa-shopping-cart " aria-hidden="true"></i>
              </NavLink>
              <span className="badge badge-icon cart">{itemsInCart.length}</span>
            </div>
            <span className="nav-icon-name">Cart</span>
          </li>
          <li>
              <NavLink to={authState.isUserLoggedIn? "/profile" : "/login"} activeClassName="activePage">
                <i className="fa fa-user " aria-hidden="true"></i>
              </NavLink>
              <span className="nav-icon-name">User</span>
          </li>

        </ul>
      </nav>
    </>
  );
}
