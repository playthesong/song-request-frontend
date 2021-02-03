import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterModal from "../components/Letter/LetterModal/LetterModal";
import { getLetterById } from "../modules/letter";

const LetterModalContainer = ({ openedId, onCloseModal }) => {
  const { data: letter, loading, error } = useSelector(state => state.letter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLetterById(openedId));
  }, [openedId, dispatch]);

  if (error) {
    return <div>ERROR!</div>;
  }

  if (!letter) {
    return null;
  }

  return (
    <LetterModal
      letter={letter}
      openedId={openedId}
      onCloseModal={onCloseModal}
    />
  );
};

export default LetterModalContainer;
