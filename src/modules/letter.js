import * as lettersAPI from "../api/letters";

const GET_LETTER = "letter/GET_LETTER";
const GET_LETTER_SUCCESS = "letter/GET_LETTER_SUCCESS";
const GET_LETTER_ERROR = "letter/GET_LETTER_ERROR";

const CREATE_LETTER = "letter/CREATE_LETTER";
const CREATE_LETTER_SUCCESS = "letter/CREATE_LETTER_SUCCESS";
const CREATE_LETTER_ERROR = "letter/CREATE_LETTER_ERROR";

const UPDATE_LETTER = "letter/UPDATE_LETTER";
const UPDATE_LETTER_SUCCESS = "letter/UPDATE_LETTER_SUCCESS";
const UPDATE_LETTER_ERROR = "letter/UPDATE_LETTER_ERROR";

const DELETE_LETTER = "letter/DELETE_LETTER";
const DELETE_LETTER_SUCCESS = "letter/DELETE_LETTER_SUCCESS";
const DELETE_LETTER_ERROR = "letter/DELETE_LETTER_ERROR";

export const getLetterById = id => async dispatch => {
  dispatch({ type: GET_LETTER });

  try {
    const letter = await lettersAPI.getLetterById(id);
    console.log(letter);
    dispatch({ type: GET_LETTER_SUCCESS, letter });
  } catch (error) {
    dispatch({ type: GET_LETTER_ERROR, error });
  }
};

export const createLetter = payload => async dispatch => {
  dispatch({ type: CREATE_LETTER });

  try {
    const letter = await lettersAPI.createLetter(payload);
    dispatch({ type: CREATE_LETTER_SUCCESS, letter });
  } catch (error) {
    dispatch({ type: CREATE_LETTER_ERROR, error });
  }
};

export const updateLetter = (id, payload) => async dispatch => {
  dispatch({ type: UPDATE_LETTER });

  try {
    const letter = await lettersAPI.updateLetter(id, payload);
    dispatch({ type: UPDATE_LETTER_SUCCESS, letter });
  } catch (error) {
    dispatch({ type: UPDATE_LETTER_ERROR, error });
  }
};

export const deleteLetter = id => async dispatch => {
  dispatch({ type: DELETE_LETTER });

  try {
    await lettersAPI.deleteLetter(id);
    dispatch({ type: DELETE_LETTER_SUCCESS });
  } catch (error) {
    dispatch({ type: DELETE_LETTER_ERROR, error });
  }
};

const initialState = {
  data: null,
  loading: false,
  error: null
};

function letter(state = initialState, action) {
  switch (action.type) {
    case GET_LETTER:
      return {
        data: null,
        loading: true,
        error: null
      };
    case GET_LETTER_SUCCESS:
      return {
        data: action.letter,
        loading: false,
        error: null
      };
    case GET_LETTER_ERROR:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    case CREATE_LETTER:
      return {
        data: null,
        loading: true,
        error: null
      };
    case CREATE_LETTER_SUCCESS:
      return {
        data: action.letter,
        loading: false,
        error: null
      };
    case CREATE_LETTER_ERROR:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    case UPDATE_LETTER:
      return {
        data: null,
        loading: true,
        error: null
      };
    case UPDATE_LETTER_SUCCESS:
      return {
        data: action.letter,
        loading: false,
        error: null
      };
    case UPDATE_LETTER_ERROR:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    case DELETE_LETTER:
      return {
        data: null,
        loading: true,
        error: null
      };
    case DELETE_LETTER_SUCCESS:
      return {
        data: null,
        loading: false,
        error: null
      };
    case DELETE_LETTER_ERROR:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default letter;
