import * as lettersAPI from "../api/letters";

const GET_LETTERS = "letters/GET_LETTERS";
const GET_LETTERS_SUCCESS = "letters/GET_SUCCESS";
const GET_LETTERS_ERROR = "letters/GET_LETTERS_ERROR";

export const getLetters = () => async dispatch => {
  dispatch({ type: GET_LETTERS });

  try {
    const letters = await lettersAPI.getLetters();
    dispatch({ type: GET_LETTERS_SUCCESS, letters });
  } catch (error) {
    dispatch({ type: GET_LETTERS_ERROR, error });
  }
};

const initialState = {
  data: null,
  loading: false,
  error: null
};

function letters(state = initialState, action) {
  switch (action.type) {
    case GET_LETTERS:
      return {
        data: null,
        loading: true,
        error: null
      };
    case GET_LETTERS_SUCCESS:
      return {
        data: action.letters,
        loading: false,
        error: null
      };
    case GET_LETTERS_ERROR:
      return {
        letters: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default letters;
