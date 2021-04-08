import React from "react";
import styled, { css } from "styled-components";
import { FiSend } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { changeModalType, openModal } from "../../modules/letterModal";
import { LETTER_MODAL } from "../../constants/types";

const ActionButtons = ({ currentUser, readyToLetter }) => {
  const dispatch = useDispatch();
  const openCreateModal = () => {
    dispatch(openModal());
    dispatch(changeModalType(LETTER_MODAL.CREATE));
  };

  return (
    <ActionsButtonsBlock>
      {!readyToLetter && (
        <StopNotice>
          <StopNoticeIcon />
          <StopNoticeMessage>신청곡 중단 중</StopNoticeMessage>
        </StopNotice>
      )}
      {readyToLetter && currentUser && (
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

const ButtonStyles = css`
  box-sizing: border-box;
  border: none;
  background-color: #fff;
  font-size: 1.2rem;
  border-radius: 1rem;
  height: 3rem;
  padding: 0.5rem 0.7rem;
  display: inline-block;
  box-shadow: 0px 1px 15px 0px rgba(5, 5, 5, 0.1);
  outline: none;
  transition: 0.1s;
  color: rgb(255, 255, 255, 1);
  font-weight: 600;
`;

const CreateButton = styled.button`
  ${ButtonStyles}
  cursor: pointer;
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

const StopNotice = styled.div`
  ${ButtonStyles}
  background: #faa2c1;
  border-radius: 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 3px 15px 0px rgba(0, 0, 0, 0.3);
`;

const StopNoticeIcon = styled(BiTime)`
  font-size: 1.8rem;
  color: #fff;
  font-weight: 700;
`;

const StopNoticeMessage = styled.p`
  font-weight: 700;
  margin-top: 0.3rem;
  margin-left: 0.3rem;
`;

export default ActionButtons;
