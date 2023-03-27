import { TODOS_REQUEST , TODOS_SUCCESS , TODOS_FAIL} from "../Actions/Types";

// get todos  reducer

export const GetTodos = (state = {}, action) => {
    switch (action.type) {
      case TODOS_REQUEST:
        return { loading: true };
      case TODOS_SUCCESS:
        return { loading: false, user: action.payload };
      case TODOS_FAIL:
        return { loading: false, error: action.payload };
      
      default:
        return state;
    }
  };