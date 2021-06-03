import React from "react";
import { Routes, Route } from "react-router-dom";

import "./styles.css";

import {
   Home,
   ProductListing,
   ProductDetail,
   Cart,
   WishList,
   Login,
   Profile,
   SignUp,
   ResetPassword,
} from "./pages";

import { useCommerce } from "./context";
import { AppNavBar, Loader, FloatingActionBttn, Footer } from "./components";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoute";

export default function App() {
   const { isLoading } = useCommerce();

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
               <Route path="/profile" element={<Profile />} />
               <Route path="/signup" element={<SignUp />} />
               <Route path="/reset" element={<ResetPassword />} />
            </Routes>
         </main>

         <FloatingActionBttn />

         <Footer />
      </div>
   );
}
