import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled, { css } from "styled-components";
import LetterDetailsHiddenMenuButton from "./LetterModalHiddenMenuButton";

const LetterDetailsHiddenMenu = ({
  isMouseEnter,
  isMenuOpen,
  onToggle,
  changeToEdit
}) => {
  return (
    <ButtonBlock isMouseEnter={isMouseEnter} onClick={onToggle}>
      <HiddenMenu />
      {isMenuOpen && (
        <LetterDetailsHiddenMenuButton changeToEdit={changeToEdit} />
      )}
    </ButtonBlock>
  );
};

const ButtonBlock = styled.div`
  ${props =>
    props.isMouseEnter
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
  bottom: 92.5%;
  right: 3%;
  cursor: pointer;
  font-size: 2.1rem;
  color: gray;
`;

export default LetterDetailsHiddenMenu;
