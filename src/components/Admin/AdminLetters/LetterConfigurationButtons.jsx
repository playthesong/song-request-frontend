import React from "react";
import styled, { css } from "styled-components";

const LetterConfigurationButtons = ({ openModal }) => {
  return (
    <ButtonsBlock>
      <InitializeButton onClick={openModal}>신청곡 초기화</InitializeButton>
      <RequestConfigurationButton>신청곡 중지</RequestConfigurationButton>
    </ButtonsBlock>
  );
};

const ButtonsBlock = styled.div`
  margin-top: 3rem;
`;

const ButtonStyles = css`
  margin: 0rem 1rem;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem 1.2rem;
  color: #fff;
  outline: none;
  box-shadow: 7px 0px 35px 1px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  font-weight: 600;

  &:first-child {
    margin-left: 0rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const InitializeButton = styled.button`
  ${ButtonStyles}

  cursor: pointer;
  background: #495057;
`;

const RequestConfigurationButton = styled.button`
  ${ButtonStyles}

  background: #ffa8a8;
`;

export default LetterConfigurationButtons;
