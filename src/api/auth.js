import { AUTH } from "../constants/auth";
import { client } from "./client";

export const login = async generationKey => {
  const tokenBeginIndex = AUTH.BEARER.length;

  try {
    const {
      headers: { authorization }
    } = await client.get(process.env.REACT_APP_API_TOKEN_URL, {
      headers: { Authorization: AUTH.BEARER + generationKey }
    });

    return authorization.substring(tokenBeginIndex);
  } catch (error) {
    console.log(error);
  }
};

export const validate = async jwtToken => {
  await client.get(process.env.REACT_APP_API_VALIDATION_URL, {
    headers: { Authorization: AUTH.BEARER + jwtToken }
  });
};
