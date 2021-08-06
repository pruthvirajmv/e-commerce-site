import { useEffect, useRef, useState } from "react";

export default function ProductsSearch({ dispatch }) {
   const [searchInput, setSearchInput] = useState("");

   const searchBar = useRef();

   useEffect(() => {
      if (searchInput !== "")
         dispatch({
            type: "SEARCH_FOR_PRODUCTS",
            payload: searchInput,
         });

      if (searchInput === "") {
         clearSearch();
      }
   }, [searchInput]);

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
               ref={searchBar}
               value={searchInput}
               placeholder="Search products"
               onChange={(e) => setSearchInput(() => e.target.value)}
            />
            {searchInput !== "" ? (
               <i onClick={clearSearch} className="fa fa-times" aria-hidden="true"></i>
            ) : (
               <i
                  onClick={() => searchBar.current.focus()}
                  className="fa fa-search"
                  aria-hidden="true"></i>
            )}
         </div>
      </>
   );
}
