import axios from 'axios';
import {
    TODOS_REQUEST ,
    TODOS_SUCCESS,
    TODOS_FAIL
} from './Types'


const url = "http://localhost:4000";

export const GetTodos = () => async dispatch => {

    try {
      dispatch({ type: TODOS_REQUEST });
      const config = {
        headers: {
          "Authorization" : "Basic enVja2VyOjEyMzQ1Ng"
        }
      };

      const { data } = await axios.get(
        `${url}/todos`,
        config
      );
      dispatch({ type: TODOS_SUCCESS, payload: data });
      localStorage.setItem("todos", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: TODOS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message
      });
    }
  };
