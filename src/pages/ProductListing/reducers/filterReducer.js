export default function filterReducer(value, action) {
  switch (action.type) {
    case "TOGGLE_INVENTORY":
      return { ...value, showOnlyInStock: !value.showOnlyInStock };

    case "TOGGLE_DELIVERY":
      return { ...value, showFastDelivery: !value.showFastDelivery };

    case "PRICE_RANGE":
      return {
        ...value,
        priceRange: action.payload
      };

    case "CLEAR_FILTERS":
      return {
        ...value,
        showOnlyInStock: true,
        showFastDelivery: false,
        priceRange: 1000,
        searchProducts: ""
      };

    case "SEARCH_FOR_PRODUCTS":
      return {
        ...value,
        searchProducts: action.payload
      };

    case "CLEAR_SEARCH":
      return {
        ...value,
        searchProducts: ""
      };

    default:
  }
}
