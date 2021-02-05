import React from "react";
import styled from "styled-components";
import { HiCheck } from "react-icons/hi";

const SongSearchResultItem = ({ song }) => {
  const { title, artist, imageUrl } = song;
  return (
    <Song>
      <SongImage src={imageUrl} />
      <SongDetails>
        <SongTitle>{title}</SongTitle>
        <SongArtist>{artist}</SongArtist>
      </SongDetails>
      <SelectButton />
    </Song>
  );
};

const Song = styled.li`
  display: flex;
`;

const SongImage = styled.img`
  width: 5rem;
  height: 5rem;
`;

const SongDetails = styled.div``;

const SongTitle = styled.span``;

const SongArtist = styled.span``;

const SelectButton = styled(HiCheck)``;

export default SongSearchResultItem;
