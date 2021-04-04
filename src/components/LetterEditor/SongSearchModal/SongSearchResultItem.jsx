import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import { HiCheck } from "react-icons/hi";
import realpianoLogo from "../../../assets/realpiano_logo_alt.png";

const TITLE_MAX_LENGTH = 30;

const SongSearchResultItem = ({ song, mapSongToForm, onCloseModal }) => {
  const { title, artist, imageUrl } = song;

  return (
    <Song>
      <SongImage src={imageUrl ? imageUrl : realpianoLogo} />
      <SongDetails>
        <SongTitle>
          {parse(
            title.length > TITLE_MAX_LENGTH
              ? `${title.slice(0, TITLE_MAX_LENGTH)}...`
              : title
          )}
        </SongTitle>
        <SongArtist>{parse(artist)}</SongArtist>
      </SongDetails>
      <SelectButton
        onClick={() => {
          mapSongToForm(song);
          onCloseModal();
        }}
        className="select-button"
      />
    </Song>
  );
};

const Song = styled.li`
  display: flex;
  margin-bottom: 3rem;
  margin-left: 0.8rem;

  &:hover {
    & .select-button {
      color: #f06595;
    }
  }

  &:nth-child(1) {
    margin-top: 0.3rem;
  }
`;

const SongImage = styled.img`
  width: 6rem;
  height: 6rem;
  box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.3);
`;

const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 17.5%;

  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 16.5%;
  }
`;

const SongTitle = styled.span`
  font-size: 1.4rem;
  font-weight: 600;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.31rem;
  }
`;

const SongArtist = styled.span`
  margin-top: 0.7rem;
  color: #868e96;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.2rem;
  }
`;

const SelectButton = styled(HiCheck)`
  opacity: 0.5;
  font-size: 2.5rem;
  margin-top: 0.7rem;
  margin-left: auto;
  margin-right: 2%;
  cursor: pointer;
  transition: 0.25s;
`;

export default SongSearchResultItem;
