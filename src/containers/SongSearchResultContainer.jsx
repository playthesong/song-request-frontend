import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SongSearchResult from "../components/Letter/LetterEditor/SongSearchModal/SongSearchResult";
import { searchSong } from "../modules/song";

const SongSearchResultContainer = () => {
  const { data: songs, loading, error } = useSelector(state => state.song);

  if (error) {
    return <div>ERROR!</div>;
  }

  if (!songs) {
    return null;
  }

  return <SongSearchResult songs={songs} />;
};

export default SongSearchResultContainer;
