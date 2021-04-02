import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled, { css } from "styled-components";
import useModal from "../../hooks/useModal";
import HiddenButtons from "./HiddenButtons";

const AdminHiddenMenu = ({ isMouseEnter }) => {
  const [isMenuOpened, openHiddenMenu, closeHiddenMenu] = useModal();

  return (
    <AdminHiddenMenuBlock isMouseEnter={isMouseEnter}>
      <HiddenMenu />
      <HiddenButtons />
    </AdminHiddenMenuBlock>
  );
};

const AdminHiddenMenuBlock = styled.div`
  position: absolute;
  top: 9%;
  right: 3%;
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
  bottom: 92.5%;
  right: 5%;
  cursor: pointer;
  font-size: 2.1rem;
  color: rgba(0, 0, 0, 0.5);
`;

export default AdminHiddenMenu;
