import { combineReducers } from "redux";
import letters from "./letters";
import letter from "./letter";
import letterModal from "./letterModal";
import song from "./song";
import letterForm from "./letterForm";
import auth from "./auth";

const rootReducer = combineReducers({
  letters,
  letter,
  letterModal,
  song,
  letterForm,
  auth
});

export default rootReducer;
