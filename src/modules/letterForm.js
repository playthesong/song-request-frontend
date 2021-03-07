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
export const setErrorTitle = valid => ({
  type: SET_ERROR_TITLE,
  valid
});
export const setErrorArtist = valid => ({
  type: SET_ERROR_ARTIST,
  valid
});
export const setErrorImageUrl = valid => ({
  type: SET_ERROR_IMAGE_URL,
  valid
});
export const setErrorSongStory = valid => ({
  type: SET_ERROR_SONG_STORY,
  valid
});

const initialState = {
  title: "",
  artist: "",
  imageUrl: "",
  songStory: "",
  titleError: false,
  artistError: false,
  imageUrlError: false,
  songStoryError: false
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
        songStoryError: false
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
        titleError: action.valid
      };
    case SET_ERROR_ARTIST:
      return {
        ...state,
        artistError: action.valid
      };
    case SET_ERROR_IMAGE_URL:
      return {
        ...state,
        imageUrlError: action.valid
      };
    case SET_ERROR_SONG_STORY:
      return {
        ...state,
        songStoryError: action.valid
      };
    default:
      return state;
  }
}

export default letterForm;
