import letters from "../mockData";

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const getLetters = async () => {
  await sleep(500);
  return letters;
};

export const getLetterById = async id => {
  await sleep(100);
  return letters.find(letter => letter.id === id);
};
