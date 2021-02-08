import { combineReducers } from "redux";
import letters from "./letters";
import letter from "./letter";
import letterModal from "./letterModal";
import song from "./song";
import letterForm from "./letterForm";

const rootReducer = combineReducers({
  letters,
  letter,
  letterModal,
  song,
  letterForm
});

export default rootReducer;
