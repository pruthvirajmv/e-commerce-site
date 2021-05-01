
export default function ProductsCategoryFilter({
    filterDispatch,
    categoriesFilter,
  }) {

    const categories = ["shoes", "racquet", "shuttlecock", "racquetgrip", "accessories"];

    return (
      <>
        <fieldset>
          <legend> Categories </legend>
        { categories.map( category => <label className="filter-label">
                <input
                type="checkbox"
                checked={categoriesFilter.some( name => name.toUpperCase() === category.toUpperCase())}
                className="filter-label-input"
                onChange={() => filterDispatch({ type: "SET_CATEGORY_FILTERS", payload: category })}
                />
                {category}
            </label>
            )
        }

          <label className="filter-label">
            <button
              className="bttn bttn-secondary"
              onClick={() => filterDispatch({ type: "CLEAR_CATEGORY_FILTERS" })}
            >
              Clear
            </button>
          </label>
        </fieldset>
      </>
    );
  }
  