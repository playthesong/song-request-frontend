import React from "react";
import styled from "styled-components";

const LetterModalTemplate = ({ children, onMouseEnter, onMouseLeave }) => {
  return (
    <LetterModalTemplateBlock
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </LetterModalTemplateBlock>
  );
};

const LetterModalTemplateBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38rem;
  min-height: 35vh;
  box-shadow: 3px -3px 5px 1px rgba(253, 253, 253, 0.03);
  background-color: #fbfbfd;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 4.5rem 4.5rem 6rem 4.5rem;
`;

export default LetterModalTemplate;
