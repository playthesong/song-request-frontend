import * as lettersAPI from "../api/letters";

const GET_LETTER = "letter/GET_LETTER";
const GET_LETTER_SUCCESS = "letter/GET_LETTER_SUCCESS";
const GET_LETTER_ERROR = "letter/GET_LETTER_ERROR";

const UPDATE_LETTER = "letter/UPDATE_LETTER";
const UPDATE_LETTER_SUCCESS = "letter/UPDATE_LETTER_SUCCESS";
const UPDATE_LETTER_ERROR = "letter/UPDATE_LETTER_ERROR";

export const getLetterById = id => async dispatch => {
  dispatch({ type: GET_LETTER });

  try {
    const letter = await lettersAPI.getLetterById(id);
    dispatch({ type: GET_LETTER_SUCCESS, letter });
  } catch (error) {
    dispatch({ type: GET_LETTER_ERROR, error });
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

    default:
      return state;
  }
}

export default letter;
