import PriceRangeSlider from './PriceRangeSlider/PriceRangeSlider';

export default function ProductFilters({
  filterDispatch,
  showOnlyInStock,
  showFastDelivery,
  priceRange,
}) {
  return (
    <>
      <fieldset>
        <legend> Filters </legend>
        <label className='filter-label'>
          <input
            type='checkbox'
            checked={!showOnlyInStock}
            className='filter-label-input'
            onChange={() => filterDispatch({ type: 'TOGGLE_INVENTORY' })}
          />
          Include Out of Stock
        </label>
        <label className='filter-label'>
          <input
            type='checkbox'
            checked={showFastDelivery}
            className='filter-label-input'
            onChange={() => filterDispatch({ type: 'TOGGLE_DELIVERY' })}
          />
          Fast Delivery Only
        </label>
        <div className='filter-label'>
          <PriceRangeSlider dispatch={filterDispatch} price={priceRange} />
        </div>
        <label className='filter-label'>
          <button
            className='bttn bttn-secondary'
            onClick={() => filterDispatch({ type: 'CLEAR_FILTERS' })}>
            Clear
          </button>
        </label>
      </fieldset>
    </>
  );
}
