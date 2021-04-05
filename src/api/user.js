import { AUTH } from "../constants/auth";
import { authClient } from "./client";

const MY_PAGE_API = process.env.REACT_APP_API_MY_PAGE;
const USER_DELETE_API = process.env.REACT_APP_API_ACCOUNT_DELETE;

export const getMyPage = async jwtToken => {
  const { data: response } = await authClient.get(MY_PAGE_API, {
    headers: {
      Authorization: AUTH.BEARER + jwtToken
    }
  });
  const { data: user } = response;
  return user;
};

export const deleteUser = async jwtToken => {
  await authClient.delete(USER_DELETE_API, {
    headers: {
      Authorization: AUTH.BEARER + jwtToken
    }
  });
};
