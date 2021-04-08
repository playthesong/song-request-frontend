import * as lettersAPI from "../api/letters";

const GET_LETTERS = "letters/GET_LETTERS";
const GET_LETTERS_SUCCESS = "letters/GET_LETTERS_SUCCESS";
const GET_LETTERS_ERROR = "letters/GET_LETTERS_ERROR";

const INITIALIZE_LETTERS = "letters/INITIALIZE_LETTERS";
const INITIALIZE_LETTERS_ERROR = "letters/INITIALIZE_LETTERS_ERROR";

const GET_READY_TO_LETTER = "letters/GET_READY_TO_LETTER";
const GET_READY_TO_LETTER_SUCCESS = "letters/GET_READY_TO_LETTER_SUCCESS";
const GET_READY_TO_LETTER_ERROR = "letters/GET_READY_TO_LETTER_ERROR";

const CHANGE_READY_TO_LETTER = "letters/CHANGE_READY_TO_LETTER";
const CHANGE_READY_TO_LETTER_SUCCESS = "letters/CHANGE_READY_TO_LETTER_SUCCESS";
const CHANGE_READY_TO_LETTER_ERROR = "letters/CHANGE_READY_TO_LETTER_ERROR";

export const getLetters = (status, direction) => async dispatch => {
  dispatch({ type: GET_LETTERS, status });

  try {
    const { letters, readyToLetter } = await lettersAPI.getLetters(
      status,
      direction
    );
    dispatch({ type: GET_LETTERS_SUCCESS, letters, status, readyToLetter });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: GET_LETTERS_ERROR, error });
  }
};

export const initializeLetters = jwtToken => async dispatch => {
  dispatch({ type: INITIALIZE_LETTERS });

  try {
    await lettersAPI.initializeLetters(jwtToken);
  } catch (error) {
    dispatch({ type: INITIALIZE_LETTERS_ERROR, error });
  }
};

export const getReadyToLetter = jwtToken => async dispatch => {
  dispatch({ type: GET_READY_TO_LETTER });

  try {
    const readyToLetter = await lettersAPI.getReadyToLetter(jwtToken);
    dispatch({ type: GET_READY_TO_LETTER_SUCCESS, readyToLetter });
  } catch (error) {
    dispatch({ type: GET_READY_TO_LETTER_ERROR, error });
  }
};

export const changeReadyToLetter = (jwtToken, payload) => async dispatch => {
  dispatch({ type: CHANGE_READY_TO_LETTER });

  try {
    const readyToLetter = await lettersAPI.changeReadyToLetter(
      jwtToken,
      payload
    );
    dispatch({ type: CHANGE_READY_TO_LETTER_SUCCESS, readyToLetter });
  } catch (error) {
    dispatch({ type: CHANGE_READY_TO_LETTER_ERROR, error });
  }
};

const initialState = {
  data: null,
  status: null,
  readyToLetter: true,
  loading: false,
  error: null
};

function letters(state = initialState, action) {
  switch (action.type) {
    case GET_LETTERS:
      return {
        ...state,
        data: null,
        status: action.status,
        loading: true,
        error: null
      };
    case GET_LETTERS_SUCCESS:
      return {
        data: action.letters,
        status: action.status,
        readyToLetter: action.readyToLetter,
        loading: false,
        error: null
      };
    case GET_LETTERS_ERROR:
      return {
        ...state,
        data: null,
        status: null,
        loading: false,
        error: action.error
      };
    case INITIALIZE_LETTERS:
      return {
        ...state,
        data: null,
        status: null,
        loading: true,
        error: null
      };
    case INITIALIZE_LETTERS_ERROR:
      return {
        ...state,
        data: null,
        status: null,
        loading: false,
        error: action.error
      };
    case GET_READY_TO_LETTER:
      return {
        ...state,
        data: null,
        status: null,
        loading: true,
        error: null
      };
    case GET_READY_TO_LETTER_SUCCESS:
      return {
        data: null,
        status: null,
        readyToLetter: action.readyToLetter,
        loading: false,
        error: null
      };
    case GET_READY_TO_LETTER_ERROR:
      return {
        ...state,
        data: null,
        status: null,
        loading: false,
        error: action.error
      };
    case CHANGE_READY_TO_LETTER:
      return {
        ...state,
        data: null,
        status: null,
        loading: true,
        error: null
      };
    case CHANGE_READY_TO_LETTER_SUCCESS:
      return {
        data: null,
        status: null,
        readyToLetter: action.readyToLetter,
        loading: false,
        error: null
      };
    case CHANGE_READY_TO_LETTER_ERROR:
      return {
        ...state,
        data: null,
        status: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default letters;
