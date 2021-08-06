import { initialAuthState } from "./AuthProvider";

export default function authReducer(state, { type, payload }) {
   switch (type) {
      case "LOAD_USER":
         return {
            ...state,
            user: payload,
            isUserLoggedIn: true,
         };

      case "LOGOUT_USER":
         return initialAuthState;

      case "UPDATE_DELIVERY_ADDRESSES":
         return {
            ...state,
            user: {
               ...state.user,
               addresses: payload,
            },
         };

      default:
         return state;
   }
}
