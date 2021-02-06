import React from "react";
import styled from "styled-components";
import SongSearchResultItem from "./SongSearchResultItem";

const SongSearchResult = ({ songs }) => {
  return (
    <SongSearchResultList>
      {songs.map((song, index) => (
        <SongSearchResultItem key={index} song={song} />
      ))}
    </SongSearchResultList>
  );
};

const SongSearchResultList = styled.ul`
  margin-top: 1.5rem;
  /* margin-left: 0.8rem; */
  height: 50vh;
  overflow-y: scroll;
`;

export default SongSearchResult;
