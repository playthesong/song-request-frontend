import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { LETTER_MODAL } from "../../../constants/types";
import { changeModalType, toggleMenu } from "../../../modules/letterModal";
import LetterDetailsHiddenMenuButton from "./LetterDetailsHiddenMenuButton";

const LetterDetailsHiddenMenu = ({
  isMouseEnter,
  isMenuOpen,
  onToggle,
  changeToEdit
}) => {
  return (
    <ButtonBlock isMouseEnter={isMouseEnter} onToggle={onToggle}>
      <HiddenMenu />
      {isMenuOpen && (
        <LetterDetailsHiddenMenuButton
          changeToEdit={changeToEdit}
          onToggle={onToggle}
        />
      )}
    </ButtonBlock>
  );
};

const ButtonBlock = styled.div`
  ${props =>
    props.mouseEnter
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
  transition: 0.7s;
`;

const HiddenMenu = styled(MdMoreHoriz)`
  position: absolute;
  bottom: 93%;
  right: 3%;
  cursor: pointer;
  font-size: 2.1rem;
  color: gray;
`;

export default LetterDetailsHiddenMenu;
