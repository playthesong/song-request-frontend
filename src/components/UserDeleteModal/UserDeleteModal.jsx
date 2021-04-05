import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled, { css } from "styled-components";
import useForm from "../../hooks/useForm";
import { logout } from "../../modules/auth";
import { deleteUser } from "../../modules/user";

const UserDeleteModal = ({ isOpened, jwtToken, user, closeDeleteModal }) => {
  const [form, onChange, onClear] = useForm({ confirmEmail: "" });
  const [confirmError, setConfirmError] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const onDeleteUser = async () => {
    if (user.email === form.confirmEmail) {
      dispatch(deleteUser(jwtToken));
      dispatch(logout());
      closeDeleteModal();
      history.push("/thankyou");
    }
    setConfirmError(true);
  };

  return (
    <DimmedBackground isOpened={isOpened}>
      <UserDeleteModalBlock>
        <DeleteTitle>정말 탈퇴 하시겠어요?</DeleteTitle>
        <DeleteComment>
          탈퇴를 원하시면 다음의 이메일 주소를 입력 해주세요.
        </DeleteComment>
        <ConfirmEmail>{user.email}</ConfirmEmail>
        <StyledInput type={"email"} name={"confirmEmail"} onChange={onChange} />
        {confirmError && (
          <ErrorMessage>
            일치하는 이메일을 입력 해주시면 탈퇴가 가능합니다.
          </ErrorMessage>
        )}
        <Buttons>
          <DeleteButton onClick={onDeleteUser}>탈퇴</DeleteButton>
          <CancelButton
            onClick={() => {
              closeDeleteModal();
              setConfirmError(false);
              onClear();
            }}
          >
            취소
          </CancelButton>
        </Buttons>
      </UserDeleteModalBlock>
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
  background: rgba(0, 0, 0, 0.8);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserDeleteModalBlock = styled.div`
  width: 45%;
  height: 45%;
  background: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    height: 60%;
    width: 100%;
  }
`;

const DeleteTitle = styled.h3`
  font-size: 1.7rem;
`;

const DeleteComment = styled.p`
  margin-top: 3rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.7);
`;

const ConfirmEmail = styled.span`
  margin-top: 1.2rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.3);
`;

const StyledInput = styled.input`
  margin-top: 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.3rem 1.2rem;
  outline: none;
  border-radius: 0.5rem;
`;

const ErrorMessage = styled.p`
  margin: 2.1rem 0rem 0rem 0rem;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonStyles = css`
  padding: 0.5rem 1.7rem;
  margin: 2rem 0.6rem;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 0.3rem;
  box-shadow: 3px 5px 35px rgba(0, 0, 0, 0.3);
  color: #fff;
`;

const DeleteButton = styled.button`
  ${ButtonStyles}
  background: #f06595;
`;

const CancelButton = styled.button`
  ${ButtonStyles}
  background: #495057;
`;

export default UserDeleteModal;
