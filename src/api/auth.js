import { client } from "./client";

export const login = async generationKey => {
  const HEADER_PREFIX = "Bearer ";
  const tokenBeginIndex = HEADER_PREFIX.length;

  try {
    const {
      headers: { authorization }
    } = await client.get(process.env.REACT_APP_API_TOKEN_URL, {
      headers: { Authorization: HEADER_PREFIX + generationKey }
    });

    return authorization.substring(tokenBeginIndex);
  } catch (error) {
    console.log(error);
  }
};
