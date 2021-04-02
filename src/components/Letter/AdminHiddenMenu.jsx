import React from "react";
import styled, { css } from "styled-components";
import useModal from "../../hooks/useModal";
import HiddenButtons from "./HiddenButtons";

const AdminHiddenMenu = ({ isMouseEnter }) => {
  const [isMenuOpened, openHiddenMenu, closeHiddenMenu] = useModal();

  return (
    <AdminHiddenMenuBlock isMouseEnter={isMouseEnter}>
      <HiddenButtons />
    </AdminHiddenMenuBlock>
  );
};

const AdminHiddenMenuBlock = styled.div`
  position: absolute;
  top: 3.5%;
  right: 1.8%;
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

export default AdminHiddenMenu;
