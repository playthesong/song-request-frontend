import React from "react";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";

const CreateButton = () => {
  return (
    <CreateButtonBlock>
      <Button>
        <ButtonIcon />
        <ButtonText>신청곡 등록</ButtonText>
      </Button>
    </CreateButtonBlock>
  );
};

const CreateButtonBlock = styled.div`
  flex-basis: 12rem;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5rem;
  position: relative;
  top: 0.35rem;
`;

const Button = styled.button`
  box-sizing: border-box;
  border: none;
  background-color: #fff;
  font-size: 1.2rem;
  border-radius: 1rem;
  height: 3rem;
  padding: 0.5rem 0.7rem;
  display: inline-block;
  cursor: pointer;
  box-shadow: 0px 1px 15px 0px rgba(5, 5, 5, 0.1);
  outline: none;
  transition: 0.1s;
  color: rgb(255, 255, 255, 1);
  font-weight: 600;
  background: #ffa8a8;

  &:hover {
    color: rgb(255, 255, 255, 1);
    background: #ff8787;
  }
`;

const ButtonIcon = styled(FiSend)`
  font-size: 1.2rem;
  vertical-align: middle;
`;

const ButtonText = styled.span`
  font-size: 1.1rem;
  margin-left: 0.5rem;
  vertical-align: middle;
`;

export default CreateButton;
