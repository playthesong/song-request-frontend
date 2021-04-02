import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled, { css } from "styled-components";
import useToggle from "../../hooks/useToggle";
import HiddenButtons from "./HiddenButtons";

const AdminHiddenMenu = ({
  letterId,
  jwtToken,
  currentUser,
  isMouseEnter,
  onUpdateLetters
}) => {
  const { openMenu, toggleMenu } = useToggle();

  const onToggleMenu = event => {
    event.stopPropagation();
    toggleMenu();
  };

  return (
    <AdminHiddenMenuBlock isMouseEnter={isMouseEnter}>
      <HiddenMenu onClick={onToggleMenu} />
      <HiddenButtons
        letterId={letterId}
        jwtToken={jwtToken}
        openMenu={openMenu}
        onUpdateLetters={onUpdateLetters}
      />
    </AdminHiddenMenuBlock>
  );
};

const AdminHiddenMenuBlock = styled.div`
  position: absolute;
  width: 3rem;
  top: 2%;
  right: 3.5%;
  ${props =>
    props.isMouseEnter
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          /* visibility: hidden;
          opacity: 0; */
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
