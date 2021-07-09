import * as songAPI from "../api/song";

const SEARCH_SONG = "song/SEARCH_SONG";
const SEARCH_SONG_SUCCESS = "song/SEARCH_SONG_SUCCESS";
const SEARCH_SONG_ERROR = "song/SEARCH_SONG_ERROR";

const INITIALIZE_SONG = "song/INITIALIZE_SONG";

const GET_SONG_RANKING = "song/GET_SONG_RANKING";
const GET_SONG_RANKING_SUCCESS = "song/GET_SONG_RANKING_SUCCESS";
const GET_SONG_RANKING_ERROR = "song/GET_SONG_RANKING_ERROR";

export const searchSong = (jwtToken, artist, title) => async dispatch => {
  dispatch({ type: SEARCH_SONG });

  try {
    const songs = await songAPI.searchSong(jwtToken, artist, title);
    dispatch({ type: SEARCH_SONG_SUCCESS, songs });
  } catch (error) {
    dispatch({ type: SEARCH_SONG_ERROR, error });
  }
};

export const initializeSong = () => async dispatch => {
  dispatch({ type: INITIALIZE_SONG });
};

export const getSongRanking = () => async dispatch => {
  dispatch({ type: GET_SONG_RANKING });

  try {
    const songs = await songAPI.getSongRanking();
    dispatch({ type: GET_SONG_RANKING_SUCCESS, songs });
  } catch (error) {
    dispatch({ type: GET_SONG_RANKING_ERROR, error });
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
        data: action.songs,
        loading: false,
        error: null
      };
    case SEARCH_SONG_ERROR:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    case INITIALIZE_SONG:
      return {
        ...initialState
      };

    case GET_SONG_RANKING:
      return {
        data: null,
        loading: true,
        error: null
      };
    case GET_SONG_RANKING_SUCCESS:
      return {
        data: action.songs,
        loading: false,
        error: null
      };
    case GET_SONG_RANKING_ERROR:
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
