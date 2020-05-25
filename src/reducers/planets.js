import {
  GET_PLANETS, NEXT_GALAXY, NEXT_SYSTEM,
  PLANETS_ERROR, PREVIOUS_GALAXY, PREVIOUS_SYSTEM
} from "../actions/types";

const initialState = {
  planets: [],
  navigation: {
    galaxy: 1,
    system: 1,
    arrows: {}
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
        planets: payload[0].data,
        navigation: {
          arrows: payload[0].pagination,
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
    case PREVIOUS_GALAXY:
      return {
        ...state,
        navigation: {
          system: state.navigation.system,
          galaxy: state.navigation.galaxy - 1
        }
      };
    case PREVIOUS_SYSTEM:
      return {
        ...state,
        navigation: {
          system: state.navigation.system - 1,
          galaxy: state.navigation.galaxy
        }
      };
    case NEXT_GALAXY:
      return {
        ...state,
        navigation: {
          system: state.navigation.system,
          galaxy: state.navigation.galaxy + 1
        }
      };
    case NEXT_SYSTEM:
      return {
        ...state,
        navigation: {
          system: state.navigation.system + 1,
          galaxy: state.navigation.galaxy
        }
      };
    default:
      return state;
  }
};