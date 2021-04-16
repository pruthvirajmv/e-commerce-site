export default function ProductsSorting({ dispatch }) {
  return (
    <>
      <fieldset>
        <legend> SortBy </legend>
        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
          />
          Low to High
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
          />
          High to Low
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            onChange={() => dispatch({ type: "PRODUCTS_POPULARITY" })}
          />
          Relevance
        </label>
      </fieldset>
    </>
  );
}
