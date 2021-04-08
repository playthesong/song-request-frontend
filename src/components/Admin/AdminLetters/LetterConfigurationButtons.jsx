import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { changeReadyToLetter } from "../../../modules/letters";

const LetterConfigurationButtons = ({ jwtToken, readyToLetter, openModal }) => {
  const dispatch = useDispatch();
  const onChangeReadyToLetter = () => {
    dispatch(changeReadyToLetter(jwtToken, { readyToLetter: !readyToLetter }));
  };

  return (
    <ButtonsBlock>
      <InitializeButton onClick={openModal}>신청곡 초기화</InitializeButton>
      <RequestConfigurationButton
        onClick={onChangeReadyToLetter}
        readyToLetter={readyToLetter}
      >
        {readyToLetter ? "신청곡 중지" : "신청곡 시작"}
      </RequestConfigurationButton>
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
  cursor: pointer;

  &:first-child {
    margin-left: 0rem;
  }

  &:hover {
    opacity: 0.7;
  }
`;

const InitializeButton = styled.button`
  ${ButtonStyles}

  background: #495057;
`;

const RequestConfigurationButton = styled.button`
  ${ButtonStyles}

  background: ${props => (props.readyToLetter ? "#ffa8a8" : "#51cf66")};
`;

export default LetterConfigurationButtons;
