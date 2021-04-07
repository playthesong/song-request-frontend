import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled, { css } from "styled-components";
import useModal from "../../../hooks/useModal";
import LetterDeleteModal from "./LetterDeleteModal";
import LetterDetailsHiddenMenuButton from "./LetterModalHiddenMenuButton";

const LetterDetailsHiddenMenu = ({
  letter,
  error,
  jwtToken,
  isMouseEnter,
  isMenuOpen,
  onToggle,
  changeToEdit,
  onUpdateLetters
}) => {
  const [isOpened, openDeleteModal, closeDeleteModal] = useModal();

  return (
    <>
      <ButtonBlock isMouseEnter={isMouseEnter} onClick={onToggle}>
        <HiddenMenu />
        {isMenuOpen && (
          <LetterDetailsHiddenMenuButton
            changeToEdit={changeToEdit}
            openDeleteModal={openDeleteModal}
          />
        )}
      </ButtonBlock>
      <LetterDeleteModal
        letter={letter}
        error={error}
        jwtToken={jwtToken}
        isOpened={isOpened}
        closeDeleteModal={closeDeleteModal}
        onUpdateLetters={onUpdateLetters}
      />
    </>
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

  @media ${({ theme }) => theme.device.mobile} {
    visibility: visible;
    opacity: 1;
  }
`;

const HiddenMenu = styled(MdMoreHoriz)`
  position: absolute;
  bottom: 92.5%;
  right: 3%;
  cursor: pointer;
  font-size: 2.1rem;
  color: gray;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 2.7rem;
    top: 2%;
  }
`;

export default LetterDetailsHiddenMenu;
