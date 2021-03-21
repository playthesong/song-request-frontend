const INITIALIZE_FORM = "letterForm/INITIALIZE_FORM";
const UPDATE_FORM = "letterForm/UPDATE_FORM";
const CLEAR_FORM = "letterForm/CLEAR_FORM";

const SET_ERROR_TITLE = "letterForm/SET_ERROR_TITLE";
const SET_ERROR_ARTIST = "letterForm/SET_ERROR_ARTIST";
const SET_ERROR_IMAGE_URL = "letterForm/SET_ERROR_IMAGE_URL";
const SET_ERROR_SONG_STORY = "letterForm/SET_ERROR_SONG_STORY";

export const initializeForm = letter => ({ type: INITIALIZE_FORM, letter });
export const updateForm = (name, value) => ({ type: UPDATE_FORM, name, value });
export const clearForm = () => ({ type: CLEAR_FORM });
export const setErrorTitle = (valid, message) => ({
  type: SET_ERROR_TITLE,
  valid,
  message
});
export const setErrorArtist = (valid, message) => ({
  type: SET_ERROR_ARTIST,
  valid,
  message
});
export const setErrorImageUrl = (valid, message) => ({
  type: SET_ERROR_IMAGE_URL,
  valid,
  message
});
export const setErrorSongStory = (valid, message) => ({
  type: SET_ERROR_SONG_STORY,
  valid,
  message
});

const initialState = {
  title: "",
  artist: "",
  imageUrl: "",
  songStory: "",
  titleError: false,
  artistError: false,
  imageUrlError: false,
  songStoryError: false,
  errorMessage: null
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
        songStory,
        titleError: false,
        artistError: false,
        imageUrlError: false,
        songStoryError: false,
        errorMessage: null
      };
    case UPDATE_FORM:
      return {
        ...state,
        [action.name]: action.value
      };
    case CLEAR_FORM:
      return {
        ...initialState
      };
    case SET_ERROR_TITLE:
      return {
        ...state,
        titleError: action.valid,
        errorMessage: action.message
      };
    case SET_ERROR_ARTIST:
      return {
        ...state,
        artistError: action.valid,
        errorMessage: action.message
      };
    case SET_ERROR_IMAGE_URL:
      return {
        ...state,
        imageUrlError: action.valid,
        errorMessage: action.message
      };
    case SET_ERROR_SONG_STORY:
      return {
        ...state,
        songStoryError: action.valid,
        errorMessage: action.message
      };
    default:
      return state;
  }
}

export default letterForm;
