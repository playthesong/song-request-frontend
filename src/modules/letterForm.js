const INITIALIZE_FORM = "letterForm/INITIALIZE_FORM";
const UPDATE_FORM = "letterForm/UPDATE_FORM";
const CLEAR_FORM = "letterForm/CLEAR_FORM";

export const initializeForm = letter => ({ type: INITIALIZE_FORM, letter });
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
    case INITIALIZE_FORM:
      const { title, artist, imageUrl } = action.letter.song;
      const songStory = action.letter.songStory;
      return {
        title,
        artist,
        imageUrl,
        songStory
      };
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
