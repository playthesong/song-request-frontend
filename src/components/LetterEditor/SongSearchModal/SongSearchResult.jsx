import React from "react";
import styled from "styled-components";
import SongSearchResultItem from "./SongSearchResultItem";

const SongSearchResult = ({ songs, mapSongToForm, onCloseModal }) => {
  return (
    <SongSearchResultList>
      {songs.map((song, index) => (
        <SongSearchResultItem
          key={index}
          song={song}
          mapSongToForm={mapSongToForm}
          onCloseModal={onCloseModal}
        />
      ))}
    </SongSearchResultList>
  );
};

const SongSearchResultList = styled.ul`
  margin-top: 1.5rem;
  height: 50vh;
  overflow-y: scroll;
`;

export default SongSearchResult;
