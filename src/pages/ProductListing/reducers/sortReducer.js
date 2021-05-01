export default function sortReducer(state, action) {
  console.log(state, action)
  switch (action.type) {
    // Sort products
    case "LOW_TO_HIGH":
      return {
        ...state,
        lowToHigh: true,
        highToLow: false,
      };

    case "HIGH_TO_LOW":
      return {
        ...state,
        lowToHigh: false,
        highToLow: true,
      };

    case "CLEAR_SORT":
      return {
        lowToHigh: false,
        highToLow: false,
      };

    default:
      return state;
  }
}


