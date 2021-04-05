import * as userAPI from "../api/user";

const GET_MY_PAGE = "account/GET_MY_PAGE";
const GET_MY_PAGE_SUCCESS = "account/GET_MY_PAGE_SUCCESS";
const GET_MY_PAGE_ERROR = "account/GET_MY_PAGE_ERROR";

const DELETE_USER = "account/GET_DELETE_USER";
const DELETE_USER_ERROR = "account/GET_DELETE_USER_ERROR";

export const getMyPage = jwtToken => async dispatch => {
  dispatch({ type: GET_MY_PAGE });

  try {
    const user = await userAPI.getMyPage(jwtToken);
    dispatch({ type: GET_MY_PAGE_SUCCESS, user });
  } catch (error) {
    dispatch({ type: GET_MY_PAGE_ERROR, error });
  }
};

export const deleteUser = jwtToken => async dispatch => {
  dispatch({ type: DELETE_USER });

  try {
    await userAPI.deleteUser(jwtToken);
  } catch (error) {
    dispatch({ type: DELETE_USER_ERROR, error });
  }
};

const initialState = {
  data: null,
  loading: false,
  error: null
};

function user(state = initialState, action) {
  switch (action.type) {
    case GET_MY_PAGE:
      return {
        data: null,
        loading: true,
        error: null
      };
    case GET_MY_PAGE_SUCCESS:
      return {
        data: action.user,
        loading: false,
        error: null
      };
    case GET_MY_PAGE_ERROR:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    case DELETE_USER:
      return {
        data: null,
        loading: false,
        error: null
      };
    case DELETE_USER_ERROR:
      return {
        data: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default user;
