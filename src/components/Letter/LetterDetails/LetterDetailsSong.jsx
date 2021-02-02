import React from "react";
import LetterModalSong from "../LetterModal/LetterModalSong/LetterModalSong";
import SongAbout from "../LetterModal/LetterModalSong/SongAbout";
import SongArticle from "../LetterModal/LetterModalSong/SongArticle";
import SongArticleItem from "../LetterModal/LetterModalSong/SongArticleItem";
import SongArticleName from "../LetterModal/LetterModalSong/SongArticleName";
import SongImage from "../LetterModal/LetterModalSong/SongImage";
import SongInput from "../LetterModal/LetterModalSong/SongInput";

const LetterDetailsSong = ({ song, form, onChange, isForm }) => {
  const { title, artist, imageUrl } = song;
  return (
    <LetterModalSong>
      {isForm && <input type="hidden" name="imageUrl" value={imageUrl} />}
      <SongImage imageUrl={imageUrl} />
      <SongAbout>
        <SongArticle>
          <SongArticleName articleName={"TITLE"} />
          {isForm ? (
            <SongInput
              maxLength={"30"}
              placeholder={"노래 제목을 입력 해주세요."}
              name={"title"}
              onChange={onChange}
              value={form[title]}
              defaultValue={title}
              required
            />
          ) : (
            <SongArticleItem articleName={"TITLE"} itemName={title} />
          )}
        </SongArticle>
        <SongArticle>
          <SongArticleName articleName={"ARTIST"} />
          {isForm ? (
            <SongInput
              maxLength={"15"}
              placeholder={"가수 이름을 입력 해주세요."}
              name={"artist"}
              onChange={onChange}
              value={form[artist]}
              defaultValue={artist}
              required
            />
          ) : (
            <SongArticleItem articleName={"ARTIST"} itemName={artist} />
          )}
        </SongArticle>
      </SongAbout>
    </LetterModalSong>
  );
};

export default LetterDetailsSong;
