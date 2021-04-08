import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
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
        <ConfirmMessageWrap>
          <ConfirmIcon />
          <Title>정말 초기화 할까요?</Title>
        </ConfirmMessageWrap>
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

const ConfirmMessageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  width: 70%;
  padding-bottom: 0.7rem;
`;

const ConfirmIcon = styled(IoIosCheckmarkCircleOutline)`
  font-size: 1.9rem;
  color: #faa2c1;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
`;

const Buttons = styled.div``;

const ButtonStyles = css`
  padding: 0.5rem 1.7rem;
  margin: 1.5rem 0.6rem 1rem 0.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  box-shadow: 3px 5px 35px rgba(0, 0, 0, 0.3);
  color: #fff;

  &:hover {
    opacity: 0.8;
  }
`;

const ConfirmButton = styled.button`
  ${ButtonStyles}

  background: #f06595;
`;

const CancelButton = styled.button`
  ${ButtonStyles}

  background: #495057;
`;

export default ConfirmModal;
