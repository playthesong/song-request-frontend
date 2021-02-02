import React from "react";
import styled from "styled-components";
import useForm from "../../../hooks/useForm";
import LetterDetailsButton from "./LetterDetailsButton";
import Song from "./Song";
import SongStory from "./SongStory";
import User from "./User";

const ContentsDiv = ({ children }) => {
  return <div>{children}</div>;
};

const ContentsForm = ({ children }) => {
  return <form>{children}</form>;
};

const Contents = ({
  id,
  song,
  songStory,
  user,
  createdDateTime,
  onCloseModal,
  isEdit
}) => {
  const { title, artist, imageUrl } = song;
  const [form, onChange, onClear] = useForm({
    title,
    artist,
    imageUrl,
    songStory
  });

  const contentsBlock = (
    <>
      <Song song={song} form={form} onChange={onChange} isEdit={isEdit} />
      <SongStory
        songStory={songStory}
        form={form}
        onChange={onChange}
        isEdit={isEdit}
      />
      <User user={user} createdDateTime={createdDateTime} />
      <LetterDetailsButton
        id={id}
        onCloseModal={onCloseModal}
        form={form}
        onChange={onChange}
        isEdit={isEdit}
      />
    </>
  );
  return isEdit ? (
    <ContentsForm>{contentsBlock}</ContentsForm>
  ) : (
    <ContentsDiv>{contentsBlock}</ContentsDiv>
  );
};

export default Contents;
