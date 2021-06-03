import { useState } from "react";

export default function ProductsSearch({ dispatch }) {
   const [searchInput, setSearchInput] = useState("");

   function searchHandler() {
      if (searchInput !== "")
         dispatch({
            type: "SEARCH_FOR_PRODUCTS",
            payload: searchInput,
         });
   }

   function clearSearch() {
      dispatch({ type: "CLEAR_SEARCH" });
      setSearchInput("");
   }

   return (
      <>
         <div className="search-bar input input-primary">
            <input
               className="input"
               type="text"
               value={searchInput}
               placeholder="Search products"
               onChange={(e) => setSearchInput(() => e.target.value)}
            />
            {searchInput !== "" && (
               <i onClick={clearSearch} className="fa fa-times" aria-hidden="true"></i>
            )}
            <i onClick={searchHandler} className="fa fa-search" aria-hidden="true"></i>
         </div>
      </>
   );
}
