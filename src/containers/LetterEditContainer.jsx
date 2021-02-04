import React from "react";
import LetterEditor from "../components/Letter/LetterEditor/LetterEditor";
import { LETTER_MODAL } from "../constants/types";
import useForm from "../hooks/useForm";

const LetterEditContainer = ({
  letter,
  isOpened,
  onCloseModal,
  changeToForm,
  changeToRead
}) => {
  const { title, artist, imageUrl } = letter.song;
  const songStory = letter.songStory;
  const user = letter.user;
  const [form, onChange, onClear] = useForm({
    title,
    artist,
    imageUrl,
    songStory
  });

  console.log(form);

  return (
    <LetterEditor
      type={LETTER_MODAL.EDIT}
      form={form}
      onChange={onChange}
      onClear={onClear}
      user={user}
      isOpened={isOpened}
      onCloseModal={onCloseModal}
      changeToForm={changeToForm}
      changeToRead={changeToRead}
    />
  );
};

export default LetterEditContainer;
