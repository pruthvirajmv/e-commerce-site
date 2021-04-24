import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles.css";

import Home from "./pages/Home/Home";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import WishList from "./pages/WishList/WishList";

import useCommerce from "./context/commerce-context";
import{ AppNavBar, Loader, FloatingActionBttn }from "./components";

export default function App() {
  const { isLoading } = useCommerce();

  return (
    <div id="top" className="App">
      <AppNavBar />

      {isLoading === true && <Loader />}

      <main>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        <FloatingActionBttn />
      </main>

      <footer className="footer-nav nav-dark">
        <h5>
          made with{" "}
          <span>
            <i className="fab fa-react" aria-hidden="true"></i>
          </span>{" "}
          react by pruthvirajmv @neoGcamp
        </h5>
      </footer>
    </div>
  );
}
