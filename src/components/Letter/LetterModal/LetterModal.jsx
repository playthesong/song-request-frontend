import React from "react";
import { LETTER_MODAL } from "../../../constants/types";
import LetterEditContainer from "../../../containers/LetterEditContainer";
import LetterDetails from "../LetterDetails/LetterDetails";

const LetterModal = ({ letter, modalType }) => {
  if (modalType === LETTER_MODAL.READ) {
    return <LetterDetails letter={letter} />;
  }

  if (modalType === LETTER_MODAL.EDIT) {
    return <LetterEditContainer letter={letter} />;
  }

  return null;
};

export default LetterModal;
