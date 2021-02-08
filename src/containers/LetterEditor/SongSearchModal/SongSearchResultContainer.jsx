import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SongSearchResult from "../../../components/LetterEditor/SongSearchModal/SongSearchResult";
import { updateForm } from "../../../modules/letterForm";

const SongSearchResultContainer = ({ onCloseModal }) => {
  const { data: songs, loading, error } = useSelector(state => state.song);
  const dispatch = useDispatch();
  const mapSongToForm = song => {
    for (const property in song) {
      dispatch(updateForm(property, song[property]));
    }
  };

  if (error) {
    return <div>ERROR!</div>;
  }

  if (!songs) {
    return null;
  }

  return (
    <SongSearchResult
      songs={songs}
      mapSongToForm={mapSongToForm}
      onCloseModal={onCloseModal}
    />
  );
};

export default SongSearchResultContainer;
