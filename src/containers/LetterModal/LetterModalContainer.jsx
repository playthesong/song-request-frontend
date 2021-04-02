import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterDetails from "../../components/LetterDetails/LetterDetails";
import { LETTER_MODAL } from "../../constants/types";
import { clearForm } from "../../modules/letterForm";
import { closeModal } from "../../modules/letterModal";
import LetterCreateContainer from "../LetterEditor/LetterCreateContainer";
import LetterEditContainer from "../LetterEditor/LetterEditContainer";

const LetterModalContainer = ({ onUpdateLetters }) => {
  const { modalType } = useSelector(state => state.letterModal);
  const { data: letter, loading, error } = useSelector(state => state.letter);
  const { currentUser, jwtToken } = useSelector(state => state.auth);

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
  }, [modalType]);

  if (modalType === LETTER_MODAL.READ) {
    return (
      <LetterDetails
        letter={letter}
        loading={loading}
        error={error}
        currentUser={currentUser}
        inActivateScroll={inActivateScroll}
        onCloseModal={onCloseModal}
      />
    );
  }

  if (modalType === LETTER_MODAL.EDIT) {
    return (
      <LetterEditContainer
        letter={letter}
        currentUser={currentUser}
        jwtToken={jwtToken}
        inActivateScroll={inActivateScroll}
        onCloseModal={onCloseModal}
        onUpdateLetters={onUpdateLetters}
      />
    );
  }

  if (modalType === LETTER_MODAL.CREATE) {
    return (
      <LetterCreateContainer
        currentUser={currentUser}
        jwtToken={jwtToken}
        inActivateScroll={inActivateScroll}
        onCloseModal={onCloseModal}
        onUpdateLetters={onUpdateLetters}
      />
    );
  }

  return null;
};

export default LetterModalContainer;
