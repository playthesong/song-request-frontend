import { AUTH } from "../constants/auth";
import { authClient, client } from "./client";

const LETTERS_STATUS_API = process.env.REACT_APP_API_LETTERS_STATUS;
const LETTER_API = process.env.REACT_APP_API_LETTER;

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const getLetters = async status => {
  const params = {
    page: 1,
    size: 20
  };

  const { data: response } = await client.get(LETTERS_STATUS_API + status, {
    params
  });
  const {
    data: { letters }
  } = response;
  return letters;
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
  console.log(letter);
  return letter;
};

export const updateLetter = async (jwtToken, id, payload) => {
  // await sleep(100);
  // const { title, artist, imageUrl } = payload;
  // const songStory = payload.songStory;
  // const foundLetter = letters.find(letter => letter.id === id);
  // const updatedLetter = {
  //   ...foundLetter,
  //   song: { title, artist, imageUrl },
  //   songStory
  // };
  // const index = letters.indexOf(foundLetter);
  // letters.splice(index, 1);
  // letters.push(updatedLetter);
  // return updatedLetter;
};

export const deleteLetter = async id => {
  await sleep(100);
  // return letters.filter(letter => letter.id !== id);
};
