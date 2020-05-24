import {
  GET_PLANETS,
  PLANETS_ERROR
} from "../actions/types";

const initialState = {
  planets: [],
  loading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PLANETS:
      return {
        ...state,
        loading: false,
        planets: payload
      };
    case PLANETS_ERROR:
      return {
        ...state,
        loading: false,
        planets: []
      };
    default:
      return state;
  }
};