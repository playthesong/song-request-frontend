import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterDetailsButton from "../components/Letter/LetterDetails/LetterDetailsButton";
import LetterModalButton from "../components/Letter/LetterModal/LetterModalButton/LetterModalButton";
import { LETTER_MODAL } from "../constants/types";
import { closeModal } from "../modules/letterModal";

const LetterModalButtonContainer = () => {
  const { modalType, isMouseEnter } = useSelector(state => state.letterModal);
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());

  if (modalType === LETTER_MODAL.READ) {
    return (
      <LetterModalButton onClick={close} isMouseEnter={isMouseEnter}>
        CLOSE
      </LetterModalButton>
    );
  }

  if (modalType === LETTER_MODAL.EDIT) {
    return (
      <LetterModalButton onClick={close} isMouseEnter={isMouseEnter}>
        EDIT
      </LetterModalButton>
    );
  }
  return null;
};

export default LetterModalButtonContainer;
