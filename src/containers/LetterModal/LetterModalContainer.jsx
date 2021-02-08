import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterModal from "../../components/LetterModal/LetterModal";
import { getLetterById } from "../../modules/letter";

const LetterModalContainer = () => {
  const { modalType, letterId } = useSelector(state => state.letterModal);
  const { data: letter, loading, error } = useSelector(state => state.letter);
  const dispatch = useDispatch();

  const openModal = () => {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
  };

  const closeModal = () => {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
  };

  useEffect(() => {
    dispatch(getLetterById(letterId));

    return () => {
      closeModal();
    };
  }, [letterId, dispatch]);

  if (error) {
    return <div>ERROR!</div>;
  }

  if (!letter) {
    return null;
  }

  openModal();

  return <LetterModal letter={letter} modalType={modalType} />;
};

export default LetterModalContainer;
