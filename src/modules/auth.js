import * as authAPI from "../api/auth";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";

export const login = async dispatch => {
  dispatch({ type: LOGIN });

  try {
    const response = await authAPI.login();
  } catch (error) {
    console.log(error);
  }
};
