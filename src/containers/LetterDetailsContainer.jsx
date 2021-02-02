import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLetterById } from "../modules/letter";
import LetterDetails from "../components/Letter/LetterDetails/LetterDetails";

const LetterDetailsContainer = ({ openedId, onCloseModal }) => {
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
    <LetterDetails
      letter={letter}
      isOpened={openedId}
      onCloseModal={onCloseModal}
    />
  );
};

export default LetterDetailsContainer;
