import axios from "axios";
import {
  TODOS_REQUEST,
  TODOS_SUCCESS,
  TODOS_FAIL,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL ,
  UPDATE_TODO_REQUEST ,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAIL
} from "./Types";

const url = "http://localhost:4000";

// get all todos
export const GetTodos = () => async dispatch => {
  try {
    dispatch({ type: TODOS_REQUEST });
    const config = {
      headers: {
        Authorization: "Basic enVja2VyOjEyMzQ1Ng"
      }
    };

    const { data } = await axios.get(`${url}/todos`, config);
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

// delete todo by id

export const DeleteTodo = id => async dispatch => {
  try {
    dispatch({ type: DELETE_TODO_REQUEST });
    const config = {
      headers: {
        Authorization: "Basic enVja2VyOjEyMzQ1Ng"
      }
    };
    await axios.delete(`${url}/todos/${id}`, config);
    dispatch({ type: DELETE_TODO_SUCCESS });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: DELETE_TODO_FAIL,
      payload: message
    });
  }
};

// update todo by id

export const UpdateTodo = (id , updatenewToDo) => async dispatch => {
  try {
    dispatch({ type: UPDATE_TODO_REQUEST });
    const config = {
      headers: {
        Authorization: "Basic enVja2VyOjEyMzQ1Ng" ,
        "Content-Type": "application/json"
      }
    };
    const { data } =  await axios.put(
    `${url}/todos/${id}` ,
    {
      "task" : updatenewToDo
    } ,
     config);
    dispatch({ type: UPDATE_TODO_SUCCESS  , payload : data});
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: UPDATE_TODO_FAIL,
      payload: message
    });
  }
};

// add new todos

export const AddNewTodo = (newToDo) => async dispatch => {
  try {
    dispatch({ type: ADD_TODO_REQUEST });
    const config = {
      headers: {
        Authorization: "Basic enVja2VyOjEyMzQ1Ng" ,
        'Content-Type': 'application/json'
      }
    };
    const  {data}  = await axios.post(
      `${url}/todos`,
      {
        "task": newToDo
      }, 
      config
    );
    dispatch({ type: ADD_TODO_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: ADD_TODO_FAIL,
      payload: message
    });
  }
};
