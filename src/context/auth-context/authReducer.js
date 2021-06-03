export default function authReducer(state, { type, payload }) {
   console.log(type);
   switch (type) {
      case "LOAD_USER":
         return {
            ...state,
            userName: payload.name,
            _id: payload._id,
            email: payload.email,
            isUserLoggedIn: true,
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
