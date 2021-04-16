import PriceRangeSlider from "./PriceRangeSlider/PriceRangeSlider";

export default function ProductFilters({
  filterDispatch,
  showOnlyInStock,
  showFastDelivery,
  priceRange
}) {
  return (
    <>
      <fieldset>
        <legend> Filters </legend>
        <label>
          <input
            type="checkbox"
            checked={!showOnlyInStock}
            onChange={() => filterDispatch({ type: "TOGGLE_INVENTORY" })}
          />
          Include Out of Stock
        </label>
        <label>
          <input
            type="checkbox"
            checked={showFastDelivery}
            onChange={() => filterDispatch({ type: "TOGGLE_DELIVERY" })}
          />
          Fast Delivery Only
        </label>

        <PriceRangeSlider dispatch={filterDispatch} price={priceRange} />
        <label>
          <button
            style={{ fontSize: "1rem" }}
            className="bttn bttn-secondary"
            onClick={() => filterDispatch({ type: "CLEAR_FILTERS" })}
          >
            Clear
          </button>
        </label>
      </fieldset>
    </>
  );
}
