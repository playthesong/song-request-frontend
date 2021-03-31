import * as authAPI from "../api/auth";
import jwt from "jsonwebtoken";
import { AUTH } from "../constants/auth";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_ERROR = "auth/LOGIN_ERROR";

const VALIDATE = "auth/VALIDATE";
const VALIDATE_SUCCESS = "auth/VALIDATE_SUCCESS";
const VALIDATE_ERROR = "auth/VALIDATE_ERROR";

export const login = generationKey => async dispatch => {
  dispatch({ type: LOGIN });

  try {
    const jwtToken = await authAPI.login(generationKey);
    const { id, email, name, avatarUrl, role } = jwt.decode(
      jwtToken,
      process.env.REACT_APP_JWT_SECRET_KEY
    );
    const currentUser = { id, email, name, avatarUrl, role };
    dispatch({ type: LOGIN_SUCCESS, jwtToken, currentUser });
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, error });
  }
};

export const validate = jwtToken => async dispatch => {
  dispatch({ type: VALIDATE });

  try {
    await authAPI.validate(jwtToken);
    const { id, email, name, avatarUrl, role } = jwt.decode(
      jwtToken,
      process.env.REACT_APP_JWT_SECRET_KEY
    );
    const currentUser = { id, email, name, avatarUrl, role };
    dispatch({ type: VALIDATE_SUCCESS, jwtToken, currentUser });
  } catch (error) {
    localStorage.removeItem(AUTH.JWT_TOKEN);
    dispatch({ type: VALIDATE_ERROR });
  }
};

const initialState = {
  currentUser: null,
  jwtToken: null,
  loading: false,
  error: null
};

function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        currentUser: null,
        jwtToken: null,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        currentUser: action.currentUser,
        jwtToken: action.jwtToken,
        loading: false,
        error: null
      };
    case LOGIN_ERROR:
      return {
        currentUser: null,
        jwtToken: null,
        loading: false,
        error: action.error
      };
    case VALIDATE:
      return {
        currentUser: null,
        jwtToken: null,
        loading: true,
        error: null
      };
    case VALIDATE_SUCCESS:
      return {
        currentUser: action.currentUser,
        jwtToken: action.jwtToken,
        loading: false,
        error: null
      };
    case VALIDATE_ERROR:
      return {
        currentUser: null,
        jwtToken: null,
        loading: false,
        error: null
      };
    default:
      return state;
  }
}

export default auth;
