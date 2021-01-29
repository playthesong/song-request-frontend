import React from "react";
import styled from "styled-components";
import ModalTemplate from "../Modal/ModalTemplate";

const LetterDetails = () => {
  return (
    <ModalTemplate>
      <LetterDetailsBlock>Modal</LetterDetailsBlock>
    </ModalTemplate>
  );
};

const LetterDetailsBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 35vw;
  min-height: 50vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default LetterDetails;
