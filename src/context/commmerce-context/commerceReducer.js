export default function reducer(state, { type, payload }) {
   switch (type) {
      // Loading on page
      case "LOAD_PRODUCTS":
         return {
            ...state,
            ProductsList: payload,
         };

      case "LOAD_USER_CART":
         return {
            ...state,
            UserCart: payload,
         };

      case "LOAD_USER_WISHLIST":
         return {
            ...state,
            UserWishlist: payload,
         };

      //Toast Toggle
      case "SHOW_TOAST":
         return {
            ...state,
            Toast: { status: "Show", msg: payload },
         };

      case "HIDE_TOAST":
         return {
            ...state,
            Toast: { ...state.Toast, status: "Hide" },
         };

      case "SET_DELIVERY_ADDRESS":
         return {
            ...state,
            deliverTo: payload || {},
         };

      default:
         return state;
   }
}
