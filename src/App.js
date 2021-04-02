import "./styles.css";

import ProductListingPage from "./Components/ProductListing/ProductListing";
import CartPage from "./Components/CartPage/CartPage";
import WishListPage from "./Components/WishListPage/WishListPage";
import useCommerce from "./Components/commerce-context/commerce-context";
import Loader from "./Components/Loader/Loader";
import useRoute, { routes } from "./Components/useRoute";

export default function App() {
  const { route, setRoute } = useRoute();
  const { state, isLoading } = useCommerce();

  const itemsInWishList = state.ProductsList.filter(
    (item) => item.isWishListed
  );

  const itemsInCart = state.ProductsList.filter((item) => item.quantity > 0);

  function AppNavBar() {
    return (
      <>
        <nav class="nav nav-dark">
          <button
            className="bttn-no-style brand-name"
            onClick={() => setRoute(routes.Products)}
          >
            <h3>E-Commerce</h3>
          </button>
          <ul class="nav-list">
            <li key="products" onClick={() => setRoute(routes.Products)}>
              Products
            </li>
            <li key="wishlist" onClick={() => setRoute(routes.Wishilists)}>
              <div class="badge">
                <i class="fa fa-heart" aria-hidden="true"></i>
                <span class="badge badge-icon">{itemsInWishList.length}</span>
              </div>
            </li>
            <li key="Cart" onClick={() => setRoute(routes.CartItems)}>
              <div class="badge">
                <i class="fa fa-shopping-cart " aria-hidden="true"></i>
                <span class="badge badge-icon">{itemsInCart.length}</span>
              </div>
            </li>
          </ul>
        </nav>
      </>
    );
  }

  return (
    <div id="top" className="App">
      <AppNavBar />
      {isLoading === "fetchStarted" && <Loader />}
      <main>
        {route === routes.Products && (
          <ProductListingPage setRoute={setRoute} />
        )}
        {route === routes.Wishilists && <WishListPage setRoute={setRoute} />}
        {route === routes.CartItems && <CartPage />}
        <a href="#top">
          <button class="bttn bttn-floating-action">Top</button>
        </a>
      </main>
      <footer className="footer-nav nav-dark">
        <h5>
          made with{" "}
          <span>
            <i class="fab fa-react" aria-hidden="true"></i>
          </span>{" "}
          react by pruthvirajmv @neoGcamp
        </h5>
      </footer>
    </div>
  );
}
