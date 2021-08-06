import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./styles.css";

import {
   Home,
   ProductListing,
   ProductDetail,
   Cart,
   WishList,
   Login,
   Account,
   Profile,
   Settings,
   SignUp,
   ResetPassword,
   Addresses,
   Orders,
} from "./pages";

import { useCommerce } from "./context";
import { AppNavBar, Loader, FloatingActionBttn, Footer } from "./components";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoute";

export default function App() {
   const { isLoading } = useCommerce();

   const { pathname } = useLocation();
   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <div id="top" className="App">
         <AppNavBar />

         {isLoading === true && <Loader />}

         <main>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/products" element={<ProductListing />} />
               <Route path="/products/:productId" element={<ProductDetail />} />
               <PrivateRoute path="/wishlist" element={<WishList />} />
               <PrivateRoute path="/cart" element={<Cart />} />
               <Route path="/login" element={<Login />} />
               <PrivateRoute path="/account" element={<Account />}>
                  <PrivateRoute path="/" element={<Profile />} />
                  <PrivateRoute path="/settings" element={<Settings />} />
                  <PrivateRoute path="/addresses" element={<Addresses />} />
                  <PrivateRoute path="/orders" element={<Orders />} />
               </PrivateRoute>
               <Route path="/signup" element={<SignUp />} />
               <Route path="/reset" element={<ResetPassword />} />
            </Routes>
         </main>

         <FloatingActionBttn />

         <Footer />
      </div>
   );
}
