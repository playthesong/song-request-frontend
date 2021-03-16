import letters from "../mockData";

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const getLetters = async status => {
  await sleep(500);
  return letters.filter(letter => letter.requestStatus === status);
};

export const getLetterById = async id => {
  await sleep(100);
  return letters.find(letter => letter.id === id);
};

export const createLetter = async payload => {
  await sleep(100);
  payload.id = letters.length + 1;
  letters.concat(payload);
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
