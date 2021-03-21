import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterDetails from "../../components/LetterDetails/LetterDetails";
import { LETTER_MODAL } from "../../constants/types";
import { clearForm } from "../../modules/letterForm";
import { closeModal } from "../../modules/letterModal";
import LetterCreateContainer from "../LetterEditor/LetterCreateContainer";
import LetterEditContainer from "../LetterEditor/LetterEditContainer";

const LetterModalContainer = () => {
  const { modalType } = useSelector(state => state.letterModal);
  const { data: letter, loading, error } = useSelector(state => state.letter);
  const dispatch = useDispatch();

  const onCloseModal = () => {
    dispatch(clearForm());
    dispatch(closeModal());
  };

  const inActivateScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
  };

  const activateScroll = () => {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
  };

  useEffect(() => {
    return () => {
      activateScroll();
    };
  });

  if (modalType === LETTER_MODAL.READ) {
    inActivateScroll();
    return (
      <LetterDetails
        letter={letter}
        loading={loading}
        error={error}
        onCloseModal={onCloseModal}
      />
    );
  }

  if (modalType === LETTER_MODAL.EDIT) {
    inActivateScroll();
    return (
      <LetterEditContainer
        letter={letter}
        loading={loading}
        error={error}
        onCloseModal={onCloseModal}
      />
    );
  }

  if (modalType === LETTER_MODAL.CREATE) {
    inActivateScroll();
    return <LetterCreateContainer onCloseModal={onCloseModal} />;
  }

  return null;
};

export default LetterModalContainer;
