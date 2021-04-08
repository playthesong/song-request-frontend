import { AUTH } from "../constants/auth";
import { authClient, client } from "./client";

const LETTERS_STATUS_API = process.env.REACT_APP_API_LETTERS_STATUS;
const LETTER_API = process.env.REACT_APP_API_LETTER;
const INITIALIZE_LETTERS_API = process.env.REACT_APP_API_INITIALIZE_LETTERS;
const READY_TO_LETTER_API = process.env.REACT_APP_API_READY_TO_LETTER;

export const getLetters = async (status, direction) => {
  const params = {
    page: 1,
    size: 20,
    direction: direction
  };

  const { data: response } = await client.get(LETTERS_STATUS_API + status, {
    params
  });
  const {
    data: { letters, readyToLetter }
  } = response;
  return { letters, readyToLetter };
};

export const getLetterById = async id => {
  const { data: response } = await client.get(LETTER_API + id);
  const { data: letter } = response;
  return letter;
};

export const createLetter = async (jwtToken, payload) => {
  const { data: response } = await authClient.post(LETTER_API, payload, {
    headers: {
      Authorization: AUTH.BEARER + jwtToken
    }
  });
  const { data: letter } = response;
  return letter;
};

export const updateLetter = async (jwtToken, id, payload) => {
  const { songStory, title, artist, imageUrl } = payload;
  const requestBody = { songStory, song: { title, artist, imageUrl } };
  const { data: response } = await authClient.put(
    LETTER_API + id,
    requestBody,
    {
      headers: {
        Authorization: AUTH.BEARER + jwtToken
      }
    }
  );
  const { data: letter } = response;
  return letter;
};

export const deleteLetter = async (jwtToken, id) => {
  await authClient.delete(LETTER_API + id, {
    headers: {
      Authorization: AUTH.BEARER + jwtToken
    }
  });
};

export const changeLetterStatus = async (jwtToken, id, payload) => {
  await authClient.put(LETTER_API + `${id}/status`, payload, {
    headers: {
      Authorization: AUTH.BEARER + jwtToken
    }
  });
};

export const initializeLetters = async jwtToken => {
  await authClient.delete(INITIALIZE_LETTERS_API, {
    headers: {
      Authorization: AUTH.BEARER + jwtToken
    }
  });
};

export const getReadyToLetter = async jwtToken => {
  const { data: response } = await authClient.get(READY_TO_LETTER_API, {
    headers: {
      Authorization: AUTH.BEARER + jwtToken
    }
  });
  const { data: readyToLetter } = response;
  return readyToLetter;
};

export const changeReadyToLetter = async (jwtToken, payload) => {
  const { data: response } = await authClient.post(
    READY_TO_LETTER_API,
    payload,
    {
      headers: {
        Authorization: AUTH.BEARER + jwtToken
      }
    }
  );
  const { data: readyToLetter } = response;
  return readyToLetter;
};
