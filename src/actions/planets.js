import axios from 'axios';
import {
    GET_PLANETS,
    PLANETS_ERROR
} from "./types";
import { DASHBOARD_API } from "../utils/constants";
import setAuthToken from "../utils/setAuthToken";
import { loadUser } from "./auth";

export const getPlanets = (galaxy, system) => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  } else {
    await loadUser();
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`${DASHBOARD_API}/api/v1/planets?sort=coordinates.galaxy,coordinates.system,coordinates.position&coordinates.galaxy=${galaxy}&page=${system}`);

    dispatch({
      type: GET_PLANETS,
      payload: [res.data, galaxy, system]
    })
  } catch (err) {
    const errors = err.response.data.error.split(',');

    if (errors) {
      errors.map(error => dispatch(console.log(error)));
    }

    dispatch({
      type: PLANETS_ERROR
    });
  }

};

export const navigateTo = destination => dispatch => {
  dispatch({
    type: destination
  });
};