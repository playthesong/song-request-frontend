import React from "react";
import { useDispatch } from "react-redux";
import Letter from "../components/Letter/Letter";
import { changeModalType, loadLetter, openModal } from "../modules/letterModal";
import { LETTER_MODAL } from "../constants/types";

const LetterContainer = ({ id, user, song, songStory, createdDateTime }) => {
  const dispatch = useDispatch();
  const onReadLetter = letterId => {
    dispatch(openModal());
    dispatch(changeModalType(LETTER_MODAL.READ));
    dispatch(loadLetter(letterId));
  };

  return (
    <Letter
      id={id}
      user={user}
      song={song}
      songStory={songStory}
      createdDateTime={createdDateTime}
      onReadLetter={onReadLetter}
    />
  );
};

export default LetterContainer;
