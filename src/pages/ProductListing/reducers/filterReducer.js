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
        priceRange: 10000,
        searchProducts: ""
      };

    case "SET_BRAND_FILTERS":
      return {
        ...value,
        brandsFilter : value.brandsFilter.some(brand => brand.toUpperCase() === action.payload.toUpperCase()) 
        ? value.brandsFilter.filter(brand => brand.toUpperCase()  !== action.payload.toUpperCase())
        : value.brandsFilter.concat([action.payload])
      }

    case "CLEAR_BRAND_FILTERS":
      return {
        ...value,
        brandsFilter: []
      }

    case "SET_CATEGORY_FILTERS":
      return {
        ...value,
        categoriesFilter : value.categoriesFilter.some(category => category.toUpperCase() === action.payload.toUpperCase()) 
        ? value.categoriesFilter.filter(brand => brand.toUpperCase()  !== action.payload.toUpperCase())
        : value.categoriesFilter.concat([action.payload])
      }

    case "CLEAR_CATEGORY_FILTERS":
      return {
        ...value,
        categoriesFilter: []
      }
      
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

    case "CLEAR_ALL":
      return {
        ...value,
        brandsFilter: [],
        categoriesFilter: [],
        showOnlyInStock: true,
        showFastDelivery: false,
        priceRange: 10000,
        searchProducts: ""
      };

    default:
  }
}
