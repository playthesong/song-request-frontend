import React from "react";
import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { changeModalType, openModal } from "../../modules/letterModal";
import { LETTER_MODAL } from "../../constants/types";

const ActionButtons = ({ currentUser }) => {
  const dispatch = useDispatch();
  const openCreateModal = () => {
    dispatch(openModal());
    dispatch(changeModalType(LETTER_MODAL.CREATE));
  };

  return (
    <ActionsButtonsBlock>
      {currentUser && (
        <CreateButton onClick={openCreateModal}>
          <CreateButtonIcon />
          <CreateButtonText>신청곡 등록</CreateButtonText>
        </CreateButton>
      )}
    </ActionsButtonsBlock>
  );
};

const ActionsButtonsBlock = styled.div`
  flex-basis: 12rem;
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5rem;
  position: relative;
  top: 0.35rem;

  @media ${({ theme }) => theme.device.mobile} {
    top: 60%;
    right: 1%;
    position: absolute;
    order: 3;
  }
`;

const CreateButton = styled.button`
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

const CreateButtonIcon = styled(FiSend)`
  font-size: 1.2rem;
  vertical-align: middle;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
  }
`;

const CreateButtonText = styled.span`
  font-size: 1.1rem;
  margin-left: 0.5rem;
  vertical-align: middle;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
  }
`;

export default ActionButtons;
