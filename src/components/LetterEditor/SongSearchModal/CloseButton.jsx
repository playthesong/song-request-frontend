import React from "react";
import styled from "styled-components";

const CloseButton = ({ onCloseModal, clearSong }) => {
  return (
    <Button
      onClick={() => {
        clearSong();
        onCloseModal();
      }}
    >
      닫기
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  bottom: 3.5%;
  left: 50%;
  transform: translateX(-50%);
  border: 0;
  background-color: #495057;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem 1.2rem;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
`;

export default CloseButton;
