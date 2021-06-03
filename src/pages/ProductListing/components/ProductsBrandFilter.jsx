export default function ProductsBrandFilter({ filterDispatch, brandsFilter }) {
  const brands = ['Yonex', 'Nivia', 'Li-Ning'];

  return (
    <>
      <fieldset>
        <legend> Brands </legend>
        {brands.map((brand) => (
          <label className='filter-label'>
            <input
              type='checkbox'
              checked={brandsFilter.some(
                (name) => name.toUpperCase() === brand.toUpperCase()
              )}
              className='filter-label-input'
              onChange={() =>
                filterDispatch({ type: 'SET_BRAND_FILTERS', payload: brand })
              }
            />
            {brand}
          </label>
        ))}

        <label className='filter-label'>
          <button
            className='bttn bttn-secondary'
            onClick={() => filterDispatch({ type: 'CLEAR_BRAND_FILTERS' })}>
            Clear
          </button>
        </label>
      </fieldset>
    </>
  );
}
