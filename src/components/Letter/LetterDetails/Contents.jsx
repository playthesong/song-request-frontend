import React from "react";
import styled from "styled-components";
import LetterDetailsButton from "./LetterDetailsButton";
import Song from "./Song";
import SongStory from "./SongStory";
import User from "./User";

const ContentsBlock = ({
  id,
  song,
  songStory,
  user,
  createdDateTime,
  isEdit,
  onCloseModal
}) => {
  return (
    <>
      <Song song={song} isEdit={isEdit} />
      <SongStory songStory={songStory} isEdit={isEdit} />
      <User user={user} createdDateTime={createdDateTime} />
      <LetterDetailsButton onCloseModal={onCloseModal} isEdit={isEdit} />
    </>
  );
};

const ContentsDiv = ({ children }) => {
  return <div>{children}</div>;
};

const ContentsForm = ({ children }) => {
  return <form>{children}</form>;
};

const Contents = ({ id, song, songStory, user, onCloseModal, isEdit }) => {
  const contentsBlock = (
    <ContentsBlock
      id={id}
      song={song}
      songStory={songStory}
      user={user}
      onCloseModal={onCloseModal}
      isEdit={isEdit}
    />
  );

  return isEdit ? (
    <ContentsForm>{contentsBlock}</ContentsForm>
  ) : (
    <ContentsDiv>{contentsBlock}</ContentsDiv>
  );
};

export default Contents;
