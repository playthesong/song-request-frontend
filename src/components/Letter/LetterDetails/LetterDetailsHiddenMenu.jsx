import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled, { css } from "styled-components";
import useToggle from "../../../hooks/useToggle";
import LetterDetailsHiddenMenuButton from "./LetterDetailsHiddenMenuButton";

const LetterDetailsHiddenMenu = ({ mouseEnter, changeToForm }) => {
  const { openMenu, toggleMenu } = useToggle();

  return (
    <ButtonBlock mouseEnter={mouseEnter} onClick={toggleMenu}>
      <HiddenMenu />
      {openMenu && (
        <LetterDetailsHiddenMenuButton
          changeToForm={changeToForm}
          toggleMenu={toggleMenu}
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
