import React from "react";
import styled from "styled-components";
import LetterModalSong from "../LetterModal/LetterModalSong/LetterModalSong";
import SongAbout from "../LetterModal/LetterModalSong/SongAbout";
import SongArticle from "../LetterModal/LetterModalSong/SongArticle";
import SongArticleName from "../LetterModal/LetterModalSong/SongArticleName";
import SongImage from "../LetterModal/LetterModalSong/SongImage";

const LetterEditorSong = ({ form, onChange }) => {
  const { title, artist, imageUrl } = form;

  return (
    <LetterModalSong>
      <input type="hidden" name="imageUrl" value={imageUrl} />
      <SongImage imageUrl={imageUrl} />
      <SongAbout>
        <SongArticle>
          <SongArticleName articleName={"TITLE"} />
          <SongInput
            type="text"
            maxLength="30"
            placeholder="노래 제목을 입력 해주세요."
            name="title"
            onChange={onChange}
            value={title}
            required
          />
        </SongArticle>
        <SongArticle>
          <SongArticleName articleName={"ARTIST"} />
          <SongInput
            type="text"
            maxLength="15"
            placeholder="가수 이름을 입력 해주세요."
            name="artist"
            onChange={onChange}
            value={artist}
            required
          />
        </SongArticle>
      </SongAbout>
    </LetterModalSong>
  );
};

const SongInput = styled.input`
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: #27273e;
  opacity: 0.8;
  padding: 0.2rem 0.09rem 0.37rem 0.1rem;
  background-color: #fbfbfd;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:focus {
    &::placeholder {
      opacity: 0;
    }

    border-bottom: 1.5px solid rgba(230, 73, 128, 0.7);
  }

  &::placeholder {
    font-size: 1.2rem;
    opacity: 0.7;
  }
`;

export default LetterEditorSong;
