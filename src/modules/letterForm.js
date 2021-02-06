const INITIATE_FORM = "letterForm/INITIATE_FORM";
const UPDATE_FORM = "letterForm/UPDATE_FORM";
const CLEAR_FORM = "letterForm/CLEAR_FORM";

export const initiateForm = form => ({ type: INITIATE_FORM, form });
export const updateForm = (name, value) => ({ type: UPDATE_FORM, name, value });
export const clearForm = () => ({ type: CLEAR_FORM });

const initialState = {
  title: "",
  artist: "",
  imageUrl: "",
  songStory: ""
};

function letterForm(state = initialState, action) {
  switch (action.type) {
    case INITIATE_FORM:
      return action.form;
    case UPDATE_FORM:
      return {
        ...state,
        [action.name]: action.value
      };
    case CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
}

export default letterForm;
