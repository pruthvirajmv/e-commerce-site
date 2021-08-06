export const logOutUser = async (dispatch, authDispatch, setIsLoading) => {
   setIsLoading(true);
   authDispatch({ type: "LOGOUT_USER", payload: [] });
   localStorage?.removeItem("loginSession");
   dispatch({ type: "USER_LOGGED_OUT" });
   dispatch({ type: "SHOW_TOAST", payload: "Logout Successful" });
   setIsLoading(false);
};
