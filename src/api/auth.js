import { client } from "./client";

export const login = async () => {
  try {
    console.log(process.env.REACT_APP_API_LOGIN_URL);
    const response = await client.get(process.env.REACT_APP_API_LOGIN_URL);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
