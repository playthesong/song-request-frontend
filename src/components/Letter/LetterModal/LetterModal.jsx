import React from "react";
import LetterEditContainer from "../../../containers/LetterEditContainer";
import useToggle from "../../../hooks/useToggle";
import LetterDetails from "../LetterDetails/LetterDetails";

const LetterModal = ({ letter, openedId, onCloseModal }) => {
  const { isForm, changeToForm, changeToRead } = useToggle();

  return isForm ? (
    <LetterEditContainer
      letter={letter}
      isOpened={openedId}
      onCloseModal={onCloseModal}
      changeToForm={changeToForm}
      changeToRead={changeToRead}
    />
  ) : (
    <LetterDetails
      letter={letter}
      isOpened={openedId}
      onCloseModal={onCloseModal}
      changeToForm={changeToForm}
    />
  );
};

export default LetterModal;
