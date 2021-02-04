import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterDetailsHiddenMenu from "../components/Letter/LetterDetails/LetterDetailsHiddenMenu";
import { LETTER_MODAL } from "../constants/types";
import { toggleMenu, changeModalType } from "../modules/letterModal";

const LetterModalHiddenButtonContainer = () => {
  const { modalType, isMouseEnter, isMenuOpen } = useSelector(
    state => state.letterModal
  );
  const dispatch = useDispatch();
  const onToggle = () => dispatch(toggleMenu());
  const changeToEdit = () => dispatch(changeModalType(LETTER_MODAL.EDIT));

  if (modalType === LETTER_MODAL.READ || modalType === LETTER_MODAL.EDIT) {
    return (
      <LetterDetailsHiddenMenu
        isMouseEnter={isMouseEnter}
        isMenuOpen={isMenuOpen}
        onToggle={onToggle}
        changeToEdit={changeToEdit}
      />
    );
  }
};

export default LetterModalHiddenButtonContainer;
