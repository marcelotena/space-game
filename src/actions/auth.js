import axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "./types";
import { DASHBOARD_API } from "../utils/constants";
import setAuthToken from "../utils/setAuthToken";


// Load User
export const loadUser = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${DASHBOARD_API}/api/v1/auth/me`);

    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
};

// Register User
export const register = ({ name, email, password }) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post(`${DASHBOARD_API}/api/v1/auth/register`, body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(setAlert(`User ${name} registered`, 'success'))

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.error.split(',');

    if (errors) {
      errors.map(error => dispatch(setAlert(error, 'error')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(`${DASHBOARD_API}/api/v1/auth/login`, body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.error.split(',');

    if (errors) {
      errors.map(error => dispatch(setAlert(error, 'error')));
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear profile
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};