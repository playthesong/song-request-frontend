import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterModalButton from "../../components/LetterModal/LetterModalButton/LetterModalButton";
import { LETTER_MODAL } from "../../constants/types";
import { changeModalType, closeModal } from "../../modules/letterModal";
import { clearForm } from "../../modules/letterForm";
import { updateLetter } from "../../modules/letter";
import { getLetters } from "../../modules/letters";

const LetterModalButtonContainer = ({ user }) => {
  const { modalType, letterId, isMouseEnter } = useSelector(
    state => state.letterModal
  );
  const { letterForm } = useSelector(state => state);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal());
  };

  const update = event => {
    event.preventDefault();
    dispatch(
      updateLetter(letterId, {
        letterId,
        user,
        ...letterForm
      })
    );
    dispatch(clearForm());
    dispatch(changeModalType(LETTER_MODAL.READ));
    dispatch(getLetters());
  };

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
        onClick={update}
        isMouseEnter={isMouseEnter}
      >
        EDIT
      </LetterModalButton>
    );
  }
  return null;
};

export default LetterModalButtonContainer;
