import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterEditor from "../components/Letter/LetterEditor/LetterEditor";
import { initiateForm, updateForm } from "../modules/letterForm";

const LetterEditContainer = ({ letter }) => {
  const dispatch = useDispatch();

  const { title, artist, imageUrl } = letter.song;
  const songStory = letter.songStory;
  const user = letter.user;

  dispatch(initiateForm({ title, artist, imageUrl, songStory }));

  const onChange = event =>
    dispatch(updateForm(event.target.name, event.target.value));

  return (
    <LetterEditor
      title={title}
      artist={artist}
      imageUrl={imageUrl}
      songStory={songStory}
      onChange={onChange}
      user={user}
    />
  );
};

export default LetterEditContainer;
