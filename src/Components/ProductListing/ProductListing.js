import React, { useEffect, useState } from "react";
import useCommerce from "../commerce-context/commerce-context";
import { useReducer } from "react";
import "./productListing.css";

import sortReducer from "./sortReducer";
import filterReducer from "./filterReducer";
import filterData from "./filterData";

import ProductsDisplay from "./ProductsDisplay";
import ProductsFilters from "./ProductsFilters";
import ProductsSorting from "./ProductsSorting";
import ProductsSearch from "./ProductsSearch";

export default function ProductListingPage({ setRoute }) {
  const { state } = useCommerce();
  const [filterBttn, setFilterBttn] = useState("Hide");

  const [sortData, sortDispatch] = useReducer(sortReducer, {
    products: []
  });

  useEffect(
    () =>
      sortDispatch({ type: "DATA_FROM_CONTEXT", payload: state.ProductsList }),
    [state]
  );

  const [
    { showOnlyInStock, showFastDelivery, priceRange, searchProducts },
    filterDispatch
  ] = useReducer(filterReducer, {
    showOnlyInStock: true,
    showFastDelivery: false,
    priceRange: 1000,
    searchProducts: ""
  });

  const sortedData = sortData.products;
  const filteredData = filterData(sortedData, {
    searchProducts,
    showOnlyInStock,
    showFastDelivery,
    priceRange
  });

  console.log({ sortedData, filteredData });

  return (
    <div>
      <div className="searchBar-container">
        <ProductsSearch dispatch={filterDispatch} />

        <button
          className="bttn bttn-secondary filter-sort-bttn"
          onClick={() =>
            setFilterBttn((bttn) => (bttn === "Show" ? "Hide" : "Show"))
          }
        >
          Filter/Sort
        </button>
      </div>
      <div className="products-listing-layout">
        <div
          className="product-filters"
          style={{ display: filterBttn === "Show" && "flex" }}
        >
          <ProductsFilters
            filterDispatch={filterDispatch}
            showFastDelivery={showFastDelivery}
            showOnlyInStock={showOnlyInStock}
            priceRange={priceRange}
          />
          <ProductsSorting dispatch={sortDispatch} />
        </div>

        <ProductsDisplay filteredData={filteredData} setRoute={setRoute} />
      </div>
    </div>
  );
}
