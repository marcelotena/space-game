import { combineReducers } from "redux";
import planets from "./planets";
import auth from "./auth";

export default combineReducers({
  planets,
  auth
});