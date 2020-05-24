import {
  GET_PLANETS,
  PLANETS_ERROR
} from "../actions/types";

const initialState = {
  planets: [],
  navigation: {
    galaxy: 1,
    system: 1
  },
  loading: true,
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_PLANETS:
      return {
        ...state,
        loading: false,
        planets: payload[0],
        navigation: {
          galaxy: payload[1],
          system: payload[2]
        }
      };
    case PLANETS_ERROR:
      return {
        ...state,
        loading: false,
        planets: [],
        navigation: {
          galaxy: 1,
          system: 1
        }
      };
    default:
      return state;
  }
};