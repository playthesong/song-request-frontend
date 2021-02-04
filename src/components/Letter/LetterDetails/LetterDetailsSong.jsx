import React from "react";
import LetterModalSong from "../LetterModal/LetterModalSong/LetterModalSong";
import SongAbout from "../LetterModal/LetterModalSong/SongAbout";
import SongArticle from "../LetterModal/LetterModalSong/SongArticle";
import SongArticleItem from "../LetterModal/LetterModalSong/SongArticleItem";
import SongArticleName from "../LetterModal/LetterModalSong/SongArticleName";
import SongImage from "../LetterModal/LetterModalSong/SongImage";

const LetterDetailsSong = ({ song }) => {
  const { title, artist, imageUrl } = song;
  return (
    <LetterModalSong>
      <SongImage imageUrl={imageUrl} />
      <SongAbout>
        <SongArticle>
          <SongArticleName articleName={"TITLE"} />
          <SongArticleItem articleName={"TITLE"} item={title} />
        </SongArticle>
        <SongArticle>
          <SongArticleName articleName={"ARTIST"} />
          <SongArticleItem articleName={"ARTIST"} item={artist} />
        </SongArticle>
      </SongAbout>
    </LetterModalSong>
  );
};

export default LetterDetailsSong;
