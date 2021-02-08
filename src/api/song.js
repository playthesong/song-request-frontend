import song from "../mockData/song";

const sleep = n => new Promise(resolve => setTimeout(resolve, n));

export const searchSong = async (artist, title) => {
  await sleep(100);
  return song;
};
