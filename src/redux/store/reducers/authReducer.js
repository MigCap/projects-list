const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: action.err.message
      };
    case "LOGIN_SUCCES":
      console.log("login succes");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCES":
      console.log("signout succes");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };
    case "RESETPASS_SUCCES":
      console.log("resetpass succes");
      return {
        ...state,
        authError: null
      };
      case "RESETPASS_ERROR":
      console.log("resetpass error");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
