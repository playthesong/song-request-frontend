import React from "react";
import styled from "styled-components";
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
      <Song song={song} />
      <SongStory songStory={songStory} />
      <User user={user} createdDateTime={createdDateTime} />
      <CloseButton onClick={() => onCloseModal()}>CLOSE</CloseButton>
    </>
  );
};

const ContentsDiv = ({ children }) => {
  return <div>{children}</div>;
};

const ContentsForm = ({ children }) => {
  return <form>{children}</form>;
};

const Contents = ({ id, song, songStory, user, isEdit, onCloseModal }) => {
  const contentsBlock = (
    <ContentsBlock
      id={id}
      song={song}
      songStory={songStory}
      user={user}
      isEdit={isEdit}
    />
  );

  return isEdit ? (
    <ContentsForm>{contentsBlock}</ContentsForm>
  ) : (
    <ContentsDiv>{contentsBlock}</ContentsDiv>
  );
};

const CloseButton = styled.button`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 3.3rem;
  bottom: 0;
  left: 0;
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: #f06595;
  border: none;
  cursor: pointer;
  transition: 0.7s;
  outline: none;
`;

export default Contents;
