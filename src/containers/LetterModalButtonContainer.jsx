import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterDetailsButton from "../components/Letter/LetterDetails/LetterDetailsButton";
import { LETTER_MODAL } from "../constants/types";
import { closeModal } from "../modules/letterModal";

const LetterModalButtonContainer = () => {
  const { modalType } = useSelector(state => state.letterModal);
  const dispatch = useDispatch();
  const close = () => dispatch(closeModal());

  if (modalType === LETTER_MODAL.READ) {
    return <LetterDetailsButton onClick={close} />;
  }
  return null;
};

export default LetterModalButtonContainer;
