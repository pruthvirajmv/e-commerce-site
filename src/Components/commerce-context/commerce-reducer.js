import { toastMsgs } from "../Functionalities/toastMsgs";

export default function reducer(state, action) {
  switch (action.type) {
    // Product Page Functionalities
    // Loading on page
    case "LOAD_PRODUCTS":
      return {
        ...state,
        ProductsList: action.payload.sort(
          (a, b) => b.popularityScore - a.popularityScore
        )
      };

    case "TOGGLE_WISHLIST":
      return {
        ...state,
        ProductsList: state.ProductsList.map((item) =>
          item.id === action.payload.id
            ? { ...item, isWishListed: !item.isWishListed }
            : item
        ),
        ToastMsg: !action.payload.isWishListed
          ? toastMsgs.addToWishList
          : toastMsgs.removeFromWishlist
      };

    // Add to cart
    case "ADD_TO_CART":
      return {
        ...state,
        ProductsList: state.ProductsList.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        ToastMsg: toastMsgs.addToCart
      };

    // CART Functionalities
    // Remove form cart
    case "REMOVE_FROM_CART":
      return {
        ...state,
        ProductsList: state.ProductsList.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: 0 }
            : item;
        }),
        ToastMsg: toastMsgs.removeFromCart
      };

    // quantity increment and decrment
    case "DECREMENT_CART_QUANTITY":
      return {
        ...state,
        ProductsList:
          action.payload.quantity > 1
            ? state.ProductsList.map((item) =>
                item.id === action.payload.id
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
            : state.ProductsList.map((item) =>
                item.id === action.payload.id ? { ...item, quantity: 0 } : item
              ),
        ToastMsg:
          action.payload.quantity > 1
            ? toastMsgs.cartUpdate
            : toastMsgs.removeFromCart
      };

    case "INCREMENT_CART_QUANTITY":
      return {
        ...state,
        ProductsList: state.ProductsList.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        }),
        ToastMsg: toastMsgs.cartUpdate
      };

    case "MOVE_TO_WISHLIST":
      return {
        ...state,
        ProductsList: state.ProductsList.map((item) =>
          item.id === action.payload.id
            ? { ...item, isWishListed: true, quantity: 0 }
            : item
        ),
        ToastMsg: toastMsgs.moveToWishlist
      };

    default:
      return state;
  }
}
