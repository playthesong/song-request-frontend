import React from "react";
import { MdMoreHoriz } from "react-icons/md";
import styled, { css } from "styled-components";

const LetterDetailsHiddenMenuButton = ({ visible, onClick }) => {
  return (
    <ButtonBlock visible={visible} onClick={onClick}>
      <HiddenMenuButton />
    </ButtonBlock>
  );
};

const ButtonBlock = styled.div`
  ${props =>
    props.visible
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

const HiddenMenuButton = styled(MdMoreHoriz)`
  position: absolute;
  bottom: 93%;
  right: 3%;
  cursor: pointer;
  font-size: 2.1rem;
  color: gray;
`;

export default LetterDetailsHiddenMenuButton;
