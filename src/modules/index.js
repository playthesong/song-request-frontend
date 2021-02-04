import { combineReducers } from "redux";
import letters from "./letters";
import letter from "./letter";
import letterModal from "./letterModal";

const rootReducer = combineReducers({
  letters,
  letter,
  letterModal
});

export default rootReducer;
