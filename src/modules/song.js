import * as songAPI from "../api/song";

const SEARCH_SONG = "song/SEARCH_SONG";
const SEARCH_SONG_SUCCESS = "song/SEARCH_SONG_SUCCESS";
const SEARCH_SONG_ERROR = "song/SEARCH_SONG_ERROR";

export const searchSong = (artist, title) => async dispatch => {
  dispatch({ type: SEARCH_SONG });

  try {
    const song = await songAPI.searchSong(artist, title);
    dispatch({ type: SEARCH_SONG_SUCCESS, song });
  } catch (error) {
    dispatch({ type: SEARCH_SONG_ERROR });
  }
};

const initialState = {
  data: null,
  loading: false,
  error: null
};

function song(state = initialState, action) {
  switch (action.type) {
    case SEARCH_SONG:
      return {
        data: null,
        loading: true,
        error: null
      };
    case SEARCH_SONG_SUCCESS:
      return {
        data: action.song,
        loading: false,
        error: null
      };
    case SEARCH_SONG_ERROR:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default song;
