import React from "react";
import styled, { css } from "styled-components";
import { IoMdArrowBack } from "react-icons/io";

const LetterModalHiddenCloseButton = ({ isMouseEnter, onCloseModal }) => {
  return (
    <ButtonBlock isMouseEnter={isMouseEnter}>
      <HiddenCloseButton onClick={onCloseModal} />
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

  @media ${({ theme }) => theme.device.mobile} {
    visibility: visible;
    opacity: 1;
  }
`;

const HiddenCloseButton = styled(IoMdArrowBack)`
  position: absolute;
  bottom: 92.5%;
  left: 4%;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 600;
  color: gray;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 2.3rem;
  }
`;

export default LetterModalHiddenCloseButton;
