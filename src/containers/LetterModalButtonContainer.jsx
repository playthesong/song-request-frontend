import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterModalButton from "../components/Letter/LetterModal/LetterModalButton/LetterModalButton";
import { LETTER_MODAL } from "../constants/types";
import { closeModal } from "../modules/letterModal";

const LetterModalButtonContainer = () => {
  const { modalType, isMouseEnter } = useSelector(state => state.letterModal);
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());

  if (modalType === LETTER_MODAL.READ) {
    return (
      <LetterModalButton
        type={"button"}
        onClick={close}
        isMouseEnter={isMouseEnter}
      >
        CLOSE
      </LetterModalButton>
    );
  }

  if (modalType === LETTER_MODAL.EDIT) {
    return (
      <LetterModalButton
        type={"submit"}
        onClick={close}
        isMouseEnter={isMouseEnter}
      >
        EDIT
      </LetterModalButton>
    );
  }
  return null;
};

export default LetterModalButtonContainer;
