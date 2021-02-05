import { combineReducers } from "redux";
import letters from "./letters";
import letter from "./letter";
import letterModal from "./letterModal";
import song from "./song";

const rootReducer = combineReducers({
  letters,
  letter,
  letterModal,
  song
});

export default rootReducer;
