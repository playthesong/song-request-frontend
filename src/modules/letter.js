import * as lettersAPI from "../api/letters";

const GET_LETTER = "letter/GET_LETTER";
const GET_LETTER_SUCCESS = "letter/GET_LETTER_SUCCESS";
const GET_LETTER_ERROR = "letter/GET_LETTER_ERROR";

export const getLetterById = id => async dispatch => {
  dispatch({ type: GET_LETTER });

  try {
    const letter = await lettersAPI.getLetterById(id);
    dispatch({ type: GET_LETTER_SUCCESS });
  } catch (error) {
    dispatch({ type: GET_LETTER_ERROR });
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
        error: action.letter
      };
    default:
      return state;
  }
}

export default letter;
