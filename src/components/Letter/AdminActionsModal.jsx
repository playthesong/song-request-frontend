import React from "react";
import styled, { css } from "styled-components";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const AdminActionsModal = ({
  isModalOpened,
  message,
  actionButtonName,
  onAction,
  onCancel
}) => {
  return (
    <DimmedBackground
      isModalOpened={isModalOpened}
      onClick={event => event.stopPropagation()}
    >
      <AdminActionsModalBlock>
        <ConfirmMessageWrap>
          <ConfirmIcon />
          <ConfirmMessage>{message}</ConfirmMessage>
        </ConfirmMessageWrap>
        <ButtonWrap>
          <ConfirmButton onClick={onAction}>{actionButtonName}</ConfirmButton>
          <CancelButton onClick={onCancel}>취소</CancelButton>
        </ButtonWrap>
      </AdminActionsModalBlock>
    </DimmedBackground>
  );
};

const DimmedBackground = styled.div`
  display: ${props => (props.isModalOpened ? "block" : "none")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
`;

const AdminActionsModalBlock = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 45%;
  padding: 0rem 3rem;
  background-color: #fbfbfd;
  box-shadow: 1px 1px 15px 1px rgba(253, 253, 253, 0.3);
  border-radius: 0.5rem;
`;

const ConfirmMessageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  width: 90%;
  padding-bottom: 0.7rem;
`;

const ConfirmIcon = styled(IoIosCheckmarkCircleOutline)`
  font-size: 2.3rem;
  color: #20c997;
`;

const ConfirmMessage = styled.p`
  display: inline-block;
  font-size: 1.45rem;
  margin-left: 0.5rem;
  margin-top: 0.285rem;
  color: rgba(0, 0, 0, 0.7);
`;

const ButtonWrap = styled.div`
  margin-top: 1.5rem;
`;

const ButtonStyles = css`
  margin: 0rem 0.5rem;
  padding: 0.5rem 2.5rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.25rem;
  transition: 0.15s;
  box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.8;
  }
`;

const ConfirmButton = styled.button`
  ${ButtonStyles}
  background: #e8590c;
`;

const CancelButton = styled.button`
  ${ButtonStyles}
  background: #51cf66;
`;

export default AdminActionsModal;
