import React from "react";
import styled, { css } from "styled-components";

const LetterModalButton = ({ children, onClick, isMouseEnter }) => {
  return (
    <StyledButton onClick={onClick} isMouseEnter={isMouseEnter}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  ${props =>
    props.isMouseEnter
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: none;
          opacity: 0;
        `}
  position: absolute;
  width: 100%;
  height: 3.3rem;
  bottom: 0;
  left: 0;
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: #f06595;
  border: none;
  cursor: pointer;
  transition: 0.7s;
  outline: none;
`;

export default LetterModalButton;
