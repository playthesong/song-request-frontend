import React from "react";
import LetterModalHiddenMenu from "../../components/LetterModal/LetterModalHiddenButton/LetterModalHiddenMenu";
import LetterModalHiddenCloseButton from "../../components/LetterModal/LetterModalHiddenButton/LetterModalHiddenCloseButton";
import { useDispatch, useSelector } from "react-redux";
import { LETTER_MODAL } from "../../constants/types";
import { toggleMenu, changeModalType } from "../../modules/letterModal";

const LetterModalHiddenButtonContainer = ({
  letter,
  error,
  user,
  jwtToken,
  currentUser,
  onCloseModal,
  onUpdateLetters
}) => {
  const { modalType, isMouseEnter, isMenuOpen } = useSelector(
    state => state.letterModal
  );
  const dispatch = useDispatch();

  const onToggle = () => dispatch(toggleMenu());
  const changeToEdit = () => {
    dispatch(changeModalType(LETTER_MODAL.EDIT));
  };

  return (
    <>
      {(modalType === LETTER_MODAL.CREATE ||
        modalType === LETTER_MODAL.EDIT) && (
        <LetterModalHiddenCloseButton
          isMouseEnter={isMouseEnter}
          onCloseModal={onCloseModal}
        />
      )}
      {(modalType === LETTER_MODAL.READ || modalType === LETTER_MODAL.EDIT) &&
        currentUser &&
        currentUser.id === user.id && (
          <LetterModalHiddenMenu
            letter={letter}
            error={error}
            jwtToken={jwtToken}
            isMouseEnter={isMouseEnter}
            isMenuOpen={isMenuOpen}
            onToggle={onToggle}
            changeToEdit={changeToEdit}
            onUpdateLetters={onUpdateLetters}
          />
        )}
    </>
  );
};

export default LetterModalHiddenButtonContainer;
