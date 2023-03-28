import axios from "axios";
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_GET_REQUEST ,
    USER_GET_SUCCESS ,
    USER_GET_FAIL

  } from "./Types";
  
  const url = "http://localhost:4000";

export const LoginAction = () => async dispatch => {
  try {
    dispatch({ type: USER_LOGIN_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.get(
      `./data/users.json`,
      config
    );
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};


export const GetUsers = () => async dispatch => {
  try {
    dispatch({ type: USER_GET_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const { data } = await axios.get(
      `${url}/users`,
      config
    );
    dispatch({ type: USER_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

