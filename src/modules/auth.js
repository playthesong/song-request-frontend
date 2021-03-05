import * as authAPI from "../api/auth";
import jwt from "jsonwebtoken";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_ERROR = "auth/LOGIN_FAILURE";

export const login = generationKey => async dispatch => {
  dispatch({ type: LOGIN });

  try {
    const jwtToken = await authAPI.login(generationKey);
    const { user } = jwt.decode(jwtToken, process.env.REACT_APP_JWT_SECRET_KEY);
    dispatch({ type: LOGIN_SUCCESS, jwtToken, user });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error });
  }
};

const initialState = {
  user: null,
  jwtToken: null,
  loading: false,
  error: null
};

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        user: null,
        jwtToken: null,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        user: action.user,
        jwtToken: action.jwtToken,
        loading: false,
        error: null
      };
    case LOGIN_ERROR:
      return {
        user: null,
        jwtToken: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default auth;
