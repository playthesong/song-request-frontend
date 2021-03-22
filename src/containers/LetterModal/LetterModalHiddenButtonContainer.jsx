import React from "react";
import LetterModalHiddenMenu from "../../components/LetterModal/LetterModalHiddenButton/LetterModalHiddenMenu";
import LetterModalHiddenCloseButton from "../../components/LetterModal/LetterModalHiddenButton/LetterModalHiddenCloseButton";
import { useDispatch, useSelector } from "react-redux";
import { LETTER_MODAL } from "../../constants/types";
import { toggleMenu, changeModalType } from "../../modules/letterModal";

const LetterModalHiddenButtonContainer = ({
  user,
  currentUser,
  onCloseModal
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
      {!currentUser
        ? null
        : (modalType === LETTER_MODAL.READ ||
            modalType === LETTER_MODAL.EDIT) &&
          currentUser.id === user.id && (
            <LetterModalHiddenMenu
              isMouseEnter={isMouseEnter}
              isMenuOpen={isMenuOpen}
              onToggle={onToggle}
              changeToEdit={changeToEdit}
            />
          )}
    </>
  );
};

export default LetterModalHiddenButtonContainer;
