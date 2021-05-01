import useCommerce from "../../../context/commerce-context";

export default function ProductsSorting({ dispatch, data }) {
  const { state } = useCommerce();
  console.log(state.ProductsList, "data")

  return (
    <>
      <fieldset>
        <legend> SortBy </legend>
        <label className="filter-label">
          <input
            type="radio"
            name="sort"
            checked={data.lowToHigh}
            className="filter-label-input"
            onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
          />
          Low to High
        </label>

        <label className="filter-label">
          <input
            type="radio"
            name="sort"
            checked={data.highToLow}
            className="filter-label-input"
            onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
          />
          High to Low
        </label>

        <label className="filter-label">
        <button
            className="bttn bttn-secondary"
            onClick={() => { dispatch({ type: "CLEAR_SORT", payload: state.ProductsList })}}
          >
            Reset
          </button>
        </label>
      </fieldset>
    </>
  );
}
