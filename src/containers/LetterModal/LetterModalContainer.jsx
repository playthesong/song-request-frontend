import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterDetails from "../../components/LetterDetails/LetterDetails";
import { LETTER_MODAL } from "../../constants/types";
import { getLetterById } from "../../modules/letter";
import { closeModal } from "../../modules/letterModal";
import LetterCreateContainer from "../LetterEditor/LetterCreateContainer";
import LetterEditContainer from "../LetterEditor/LetterEditContainer";

const LetterModalContainer = () => {
  const { modalType, letterId } = useSelector(state => state.letterModal);
  const { data: letter, error } = useSelector(state => state.letter);
  const dispatch = useDispatch();
  const onCloseModal = () => {
    console.log("Click");
    dispatch(closeModal());
  };

  console.log(letterId);
  console.log(modalType);

  const inActivateScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
  };

  const activateScroll = () => {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
  };

  useEffect(() => {
    dispatch(getLetterById(letterId));

    return () => {
      activateScroll();
    };
  }, [letterId, dispatch]);

  if (error) {
    return <div>ERROR!</div>;
  }

  if (letter && modalType === LETTER_MODAL.READ) {
    inActivateScroll();
    return <LetterDetails letter={letter} onCloseModal={onCloseModal} />;
  }

  if (letter && modalType === LETTER_MODAL.EDIT) {
    inActivateScroll();
    return <LetterEditContainer letter={letter} onCloseModal={onCloseModal} />;
  }

  if (modalType === LETTER_MODAL.CREATE) {
    inActivateScroll();
    return <LetterCreateContainer onCloseModal={onCloseModal} />;
  }

  return null;
};

export default LetterModalContainer;
