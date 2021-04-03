import * as lettersAPI from "../api/letters";
import ActionButtons from "../components/LetterList/ActionButtons";

const GET_LETTERS = "letters/GET_LETTERS";
const GET_LETTERS_SUCCESS = "letters/GET_LETTERS_SUCCESS";
const GET_LETTERS_ERROR = "letters/GET_LETTERS_ERROR";

export const getLetters = status => async dispatch => {
  dispatch({ type: GET_LETTERS, status });

  try {
    const letters = await lettersAPI.getLetters(status);
    console.log(letters);
    dispatch({ type: GET_LETTERS_SUCCESS, letters, status });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: GET_LETTERS_ERROR, error });
  }
};

const initialState = {
  data: null,
  status: null,
  loading: false,
  error: null
};

function letters(state = initialState, action) {
  switch (action.type) {
    case GET_LETTERS:
      return {
        data: null,
        status: action.status,
        loading: true,
        error: null
      };
    case GET_LETTERS_SUCCESS:
      return {
        data: action.letters,
        status: action.status,
        loading: false,
        error: null
      };
    case GET_LETTERS_ERROR:
      return {
        letters: null,
        status: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default letters;
