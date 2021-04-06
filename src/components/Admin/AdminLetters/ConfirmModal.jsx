import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { initializeLetters } from "../../../modules/letters";

const ConfirmModal = ({ jwtToken, isOpened, closeModal }) => {
  const dispatch = useDispatch();

  const onInitialize = () => {
    dispatch(initializeLetters(jwtToken));
    closeModal();
  };

  return (
    <DimmedBackground isOpened={isOpened}>
      <ConfirmModalBlock>
        <Title>정말 초기화 할까요?</Title>
        <Buttons>
          <ConfirmButton onClick={onInitialize}>초기화</ConfirmButton>
          <CancelButton onClick={closeModal}>취소</CancelButton>
        </Buttons>
      </ConfirmModalBlock>
    </DimmedBackground>
  );
};

const DimmedBackground = styled.div`
  display: ${props => (props.isOpened ? "flex" : "none")};
  position: fixed;
  width: 100vw;
  min-height: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ConfirmModalBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 52%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 25rem;
  height: 14rem;
  box-shadow: 5px 3px 15px 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1.6rem;
`;

const Buttons = styled.div``;

const ButtonStyles = css`
  padding: 0.5rem 1.7rem;
  margin: 2rem 0.6rem 1rem 0.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  box-shadow: 3px 5px 35px rgba(0, 0, 0, 0.3);
  color: #fff;
`;

const ConfirmButton = styled.button`
  ${ButtonStyles}

  background: #e64980;
`;

const CancelButton = styled.button`
  ${ButtonStyles}

  background: #495057;
`;

export default ConfirmModal;
