import letters from "../mockData";
import { client } from "./client";

const GET_LETTERS_API = process.env.REACT_APP_API_LETTERS;

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const getLetters = async status => {
  const params = {
    page: 1,
    size: 20
  };

  const { data: response } = await client.get(GET_LETTERS_API + status, {
    params
  });
  const {
    data: { letters }
  } = response;
  return letters;
};

export const getLetterById = async id => {
  await sleep(500);
  return letters.find(letter => letter.id === id);
};

export const createLetter = async payload => {
  await sleep(100);
  payload.id = letters.length + 1;
  payload.user = {
    name: "Museop Kim",
    avatarUrl:
      "https://avatars.githubusercontent.com/u/49878687?s=460&u=e739e45e9f39b5200339cca6dc293f934fa03bc0&v=4"
  };
  letters.concat(payload);
  console.log(payload);
  return payload;
};

export const updateLetter = async (id, payload) => {
  await sleep(100);
  const { title, artist, imageUrl } = payload;
  const songStory = payload.songStory;

  const foundLetter = letters.find(letter => letter.id === id);

  const updatedLetter = {
    ...foundLetter,
    song: { title, artist, imageUrl },
    songStory
  };

  const index = letters.indexOf(foundLetter);
  letters.splice(index, 1);
  letters.push(updatedLetter);

  return updatedLetter;
};

export const deleteLetter = async id => {
  await sleep(100);
  return letters.filter(letter => letter.id !== id);
};
