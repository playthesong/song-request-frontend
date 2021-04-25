import { AUTH } from "../constants/auth";
import { authClient, client } from "./client";

const SONG_API = process.env.REACT_APP_API_SEARCH_SONG;
const RANKING_API = process.env.REACT_APP_API_SONG_RANKING;

export const searchSong = async (jwtToken, artist, title) => {
  const { data: response } = await authClient.get(SONG_API, {
    params: {
      artist,
      title
    },
    headers: {
      Authorization: AUTH.BEARER + jwtToken
    }
  });
  const {
    data: { tracks }
  } = response;
  return tracks;
};

export const getSongRanking = async () => {
  const { data: response } = await client.get(RANKING_API, {
    params: {
      page: 1,
      size: 20,
      direction: "DESC"
    }
  });
  const {
    data: { songs }
  } = response;
  return songs;
};
