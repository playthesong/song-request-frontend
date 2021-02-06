import React from "react";
import LetterModalSong from "../LetterModal/LetterModalSong/LetterModalSong";
import SongAbout from "../LetterModal/LetterModalSong/SongAbout";
import SongArticle from "../LetterModal/LetterModalSong/SongArticle";
import SongArticleName from "../LetterModal/LetterModalSong/SongArticleName";
import SongImage from "../LetterModal/LetterModalSong/SongImage";
import SongInput from "../LetterModal/LetterModalSong/SongInput";

const LetterEditorSong = ({ title, artist, imageUrl, onChange }) => {
  return (
    <LetterModalSong>
      <input type="hidden" name="imageUrl" value={imageUrl} />
      <SongImage imageUrl={imageUrl} />
      <SongAbout>
        <SongArticle>
          <SongArticleName articleName={"TITLE"} />
          <SongInput
            type={"text"}
            maxLength={"30"}
            placeholder={"노래 제목을 입력 해주세요."}
            name={"title"}
            onChange={onChange}
            value={title}
            required
          />
        </SongArticle>
        <SongArticle>
          <SongArticleName articleName={"ARTIST"} />
          <SongInput
            type={"text"}
            maxLength={"15"}
            placeholder={"가수 이름을 입력 해주세요."}
            name={"artist"}
            onChange={onChange}
            value={artist}
            required
          />
        </SongArticle>
      </SongAbout>
    </LetterModalSong>
  );
};

export default LetterEditorSong;
