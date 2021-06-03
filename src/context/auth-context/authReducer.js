export default function authReducer(state, { type, payload }) {
   console.log(type);
   switch (type) {
      case "LOAD_USER":
         return {
            ...state,
            userName: payload.userName,
            _id: payload._id,
            email: payload.email,
            isUserLoggedIn: payload.isUserLoggedIn,
         };

      case "LOGOUT_USER":
         return {
            ...state,
            userName: "",
            email: "",
            _id: "",
            isUserLoggedIn: false,
         };

      default:
         break;
   }
}
