import { combineReducers } from "redux";
import letters from "./letters";
import letter from "./letter";

const rootReducer = combineReducers({
  letters,
  letter
});

export default rootReducer;
