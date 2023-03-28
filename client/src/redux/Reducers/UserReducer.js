import { USER_LOGIN_REQUEST ,
   USER_LOGIN_SUCCESS ,
    USER_LOGIN_FAIL , 
    USER_GET_REQUEST ,
    USER_GET_SUCCESS ,
    USER_GET_FAIL
  } from "../Actions/Types";

// login reducer
export const LoginR = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { loading: true };
      case USER_LOGIN_SUCCESS:
        return { loading: false, user: action.payload };
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload };
  
      default:
        return state;
    }
  };


  export const GetUserReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_GET_REQUEST:
        return { loading: true };
      case USER_GET_SUCCESS:
        return { loading: false, users : action.payload };
      case USER_GET_FAIL:
        return { loading: false, error: action.payload };
   
      default:
        return state;
    }
  };