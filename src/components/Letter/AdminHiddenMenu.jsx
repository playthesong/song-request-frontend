import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import useModal from "../../hooks/useModal";
import useToggle from "../../hooks/useToggle";
import { changeLetterStatus, deleteLetter } from "../../modules/letter";
import AdminActionsModal from "./AdminActionsModal";
import HiddenButtons from "./HiddenButtons";

const DELETE_MESSAGE = "정말 삭제 할까요?";
const DELETE_BUTTON_NAME = "삭제";

const AdminHiddenMenu = ({
  letterId,
  jwtToken,
  isMouseEnter,
  onUpdateLetters
}) => {
  const { openMenu, toggleMenu } = useToggle();
  const [isModalOpened, openModal, closeModal] = useModal();
  const dispatch = useDispatch();

  const onToggleMenu = event => {
    event.stopPropagation();
    toggleMenu();
  };

  const onChangeStatus = (event, status) => {
    event.stopPropagation();
    dispatch(changeLetterStatus(jwtToken, letterId, status));
    onUpdateLetters();
  };

  const onOpenDeleteModal = event => {
    event.stopPropagation();
    openModal();
  };

  const onDeleteLetter = event => {
    event.stopPropagation();
    dispatch(deleteLetter(jwtToken, letterId));
    onUpdateLetters();
  };

  const onCancel = event => {
    event.stopPropagation();
    closeModal();
  };

  return (
    <>
      <AdminHiddenMenuBlock isMouseEnter={isMouseEnter}>
        <HiddenMenu onClick={onToggleMenu} />
        <HiddenButtons
          openMenu={openMenu}
          onOpenDeleteModal={onOpenDeleteModal}
          onChangeStatus={onChangeStatus}
        />
      </AdminHiddenMenuBlock>
      <AdminActionsModal
        isModalOpened={isModalOpened}
        message={DELETE_MESSAGE}
        actionButtonName={DELETE_BUTTON_NAME}
        onAction={onDeleteLetter}
        onCancel={onCancel}
      />
    </>
  );
};

const AdminHiddenMenuBlock = styled.div`
  position: absolute;
  width: 3rem;
  top: 3%;
  right: 3.5%;
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
  transition: 0.35s;

  @media ${({ theme }) => theme.device.mobile} {
    visibility: visible;
    opacity: 1;
  }
`;

const HiddenMenu = styled(MdMoreHoriz)`
  position: absolute;
  right: 5%;
  cursor: pointer;
  font-size: 2.1rem;
  color: rgba(0, 0, 0, 0.5);
`;

export default AdminHiddenMenu;
