import React, { useEffect, useState, useReducer } from "react";
import "./productListing.css";

import { useCommerce } from "../../context";

import sortReducer from "./reducers/sortReducer";
import filterReducer from "./reducers/filterReducer";
import filterData from "./filterData";

import ProductsDisplay from "./components/ProductsDisplay";
import ProductsFilters from "./components/ProductsFilters";
import ProductsSorting from "./components/ProductsSorting";
import ProductsSearch from "./components/ProductsSearch";
import ProductsBrandFilter from "./components/ProductsBrandFilter";
import ProductsCategoryFilter from "./components/ProductsCategoryFilter";
import { useLocation } from "react-router";

export function ProductListing() {
   const { state } = useCommerce();

   const [filterBttn, setFilterBttn] = useState(false);

   const [sortData, sortDispatch] = useReducer(sortReducer, {
      lowToHigh: false,
      highToLow: false,
   });

   const [
      {
         brandsFilter,
         categoriesFilter,
         showOnlyInStock,
         showFastDelivery,
         priceRange,
         searchProducts,
      },
      filterDispatch,
   ] = useReducer(filterReducer, {
      brandsFilter: [],
      categoriesFilter: [],
      showOnlyInStock: true,
      showFastDelivery: false,
      priceRange: 10000,
      searchProducts: "",
   });

   const getDiscountedPrice = (price, discount) => price - (price * discount) / 100;

   const getSortedData = (state, data) => {
      if (state.lowToHigh) {
         return [...data].sort(
            (a, b) =>
               getDiscountedPrice(a.price, a.discount) - getDiscountedPrice(b.price, b.discount)
         );
      } else if (state.highToLow) {
         return [...data].sort(
            (a, b) =>
               getDiscountedPrice(b.price, b.discount) - getDiscountedPrice(a.price, a.discount)
         );
      }
      return data;
   };

   const brandQuery = new URLSearchParams(useLocation().search);
   useEffect(() => {
      brandQuery.get?.("brand")
         ? filterDispatch({ type: "SET_BRAND_FILTERS", payload: brandQuery.get("brand") })
         : "";
   }, []);

   const sortedData = getSortedData(sortData, state.ProductsList);
   const filteredData = filterData(sortedData, {
      searchProducts,
      brandsFilter,
      categoriesFilter,
      showOnlyInStock,
      showFastDelivery,
      priceRange,
   });

   useEffect(() => {
      document.title = "ecom | products";
   }, []);

   return (
      <div>
         <div className="searchBar-container">
            <ProductsSearch dispatch={filterDispatch} />

            <button
               className="bttn bttn-secondary filter-sort-bttn"
               onClick={() => setFilterBttn((bttn) => !bttn)}>
               Filter/Sort
            </button>
         </div>
         <div className="products-listing-layout">
            <div className="product-filters" style={{ display: filterBttn === true && "flex" }}>
               <div className="product-filters-list">
                  <div className="filter-action-bttns">
                     <button
                        onClick={() => setFilterBttn((bttn) => !bttn)}
                        className="bttn bttn-primary">
                        Apply
                     </button>
                     <button
                        onClick={() => {
                           sortDispatch({ type: "CLEAR_SORT" });
                           filterDispatch({ type: "CLEAR_ALL" });
                        }}
                        className="bttn bttn-secondary">
                        Clear All
                     </button>
                  </div>
                  <ProductsFilters
                     filterDispatch={filterDispatch}
                     showFastDelivery={showFastDelivery}
                     showOnlyInStock={showOnlyInStock}
                     priceRange={priceRange}
                  />
                  <ProductsSorting data={sortData} dispatch={sortDispatch} />
                  <ProductsBrandFilter
                     filterDispatch={filterDispatch}
                     brandsFilter={brandsFilter}
                  />
                  <ProductsCategoryFilter
                     filterDispatch={filterDispatch}
                     categoriesFilter={categoriesFilter}
                  />
               </div>
            </div>

            <ProductsDisplay filteredData={filteredData} />
         </div>
      </div>
   );
}
