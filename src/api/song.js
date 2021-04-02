import { AUTH } from "../constants/auth";
import { authClient } from "./client";

const SONG_API = process.env.REACT_APP_API_SEARCH_SONG;

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
