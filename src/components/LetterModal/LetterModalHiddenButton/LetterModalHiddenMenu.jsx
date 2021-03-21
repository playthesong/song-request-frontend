import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled, { css } from "styled-components";
import useModal from "../../../hooks/useModal";
import LetterDeleteModal from "./LetterDeleteModal";
import LetterDetailsHiddenMenuButton from "./LetterModalHiddenMenuButton";

const LetterDetailsHiddenMenu = ({
  isMouseEnter,
  isMenuOpen,
  onToggle,
  changeToEdit
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
        isOpened={isOpened}
        closeDeleteModal={closeDeleteModal}
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
`;

export default LetterDetailsHiddenMenu;
