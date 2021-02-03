import React from "react";
import styled from "styled-components";

const LetterModalButton = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
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
