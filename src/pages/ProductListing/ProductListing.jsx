import React, { useEffect, useState, useReducer } from "react";
import "./productListing.css";

import useCommerce from "../../context/commerce-context";

import sortReducer from "./reducers/sortReducer";
import filterReducer from "./reducers/filterReducer";
import filterData from "./filterData";

import ProductsDisplay from "./components/ProductsDisplay";
import ProductsFilters from "./components/ProductsFilters";
import ProductsSorting from "./components/ProductsSorting";
import ProductsSearch from "./components/ProductsSearch";

export default function ProductListingPage() {
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

        <ProductsDisplay filteredData={filteredData} />
      </div>
    </div>
  );
}
