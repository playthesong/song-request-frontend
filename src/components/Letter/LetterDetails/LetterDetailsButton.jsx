import React from "react";
import styled, { css } from "styled-components";

const LetterDetailsButton = ({ id, onCloseModal, isEdit }) => {
  const onEdit = event => {
    event.preventDefault();
  };

  if (isEdit) {
    return (
      <SubmitButton type="submit" onClick={onEdit}>
        EDIT
      </SubmitButton>
    );
  }
  return <CloseButton onClick={onCloseModal}>CLOSE</CloseButton>;
};

const CommonStyles = css`
  /* visibility: hidden;
  opacity: 0; */
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

const CloseButton = styled.button`
  ${CommonStyles}
`;

const SubmitButton = styled.button`
  ${CommonStyles}
`;

export default LetterDetailsButton;
