import React from "react";
import LetterEditor from "../components/Letter/LetterEditor/LetterEditor";
import { LETTER_MODAL } from "../constants/types";
import useForm from "../hooks/useForm";

const LetterEditContainer = ({ letter }) => {
  const { title, artist, imageUrl } = letter.song;
  const songStory = letter.songStory;
  const user = letter.user;
  const [form, onChange, onClear] = useForm({
    title,
    artist,
    imageUrl,
    songStory
  });

  return (
    <LetterEditor
      form={form}
      onChange={onChange}
      onClear={onClear}
      user={user}
    />
  );
};

export default LetterEditContainer;
