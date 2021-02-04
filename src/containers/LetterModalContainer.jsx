import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterModal from "../components/Letter/LetterModal/LetterModal";
import { getLetterById } from "../modules/letter";

const LetterModalContainer = () => {
  const { modalType, letterId } = useSelector(state => state.letterModal);
  const { data: letter, loading, error } = useSelector(state => state.letter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLetterById(letterId));
  }, [letterId, dispatch]);

  if (error) {
    return <div>ERROR!</div>;
  }

  if (!letter) {
    return null;
  }

  return <LetterModal letter={letter} modalType={modalType} />;
};

export default LetterModalContainer;
