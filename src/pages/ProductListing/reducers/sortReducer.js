export default function sortReducer(state, action) {
  switch (action.type) {
    // Sort products
    case "LOW_TO_HIGH":
      return {
        ...state,
        products: state.products.sort((a, b) => a.price - b.price)
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        products: state.products.sort((a, b) => b.price - a.price)
      };

    case "PRODUCTS_POPULARITY":
      return {
        ...state,
        products: state.products.sort(
          (a, b) => b.popularityScore - a.popularityScore
        )
      };

    case "DATA_FROM_CONTEXT":
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
}
