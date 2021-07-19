export default function authReducer(state, { type, payload }) {
   switch (type) {
      case "LOAD_USER":
         return {
            ...state,
            user: payload,
            isUserLoggedIn: true,
         };

      case "LOGOUT_USER":
         return {
            ...state,
            user: {},
            isUserLoggedIn: false,
         };

      case "UPDATE_DELIVERY_ADDRESSES":
         return {
            ...state,
            user: {
               ...user,
               addresses: payload,
            },
         };

      default:
         break;
   }
}
