import { useState } from "react";

export default function ProductsSearch({ dispatch }) {
  const [searchInput, setSearchInput] = useState("");

  function searchHandler() {
    dispatch({
      type: "SEARCH_FOR_PRODUCTS",
      payload: searchInput
    });
  }

  function clearSearch() {
    dispatch({ type: "CLEAR_SEARCH" });
    setSearchInput("");
  }

  return (
    <>
      <div className="search-bar">
        <div class="input-bar">
          <input
            type="text"
            value={searchInput}
            placeholder="Search products"
            onChange={(e) =>
              setSearchInput(() => {
                if (e.target.value === "") searchHandler();
                return e.target.value;
              })
            }
          />
          {searchInput !== "" && (
            <button onClick={clearSearch} class="bttn bttn-secondary">
              X
            </button>
          )}
        </div>
        <button class="bttn bttn-primary" onClick={searchHandler}>
          Search
        </button>
      </div>
    </>
  );
}
