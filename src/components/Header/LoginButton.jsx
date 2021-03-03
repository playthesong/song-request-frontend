import React from "react";
import styled from "styled-components";
import { IoLogoGoogleplus } from "react-icons/io";

const LoginButton = () => {
  return (
    <LoginButtonBlock href={process.env.REACT_APP_API_LOGIN_URL}>
      <GoogleIcon />
      <LoginText>로그인</LoginText>
    </LoginButtonBlock>
  );
};

const LoginButtonBlock = styled.a`
  display: flex;
  align-items: center;
  padding: 0.7rem 1.5rem;
  background-color: #383a3f;
  border: none;
  outline: none;
  border-radius: 1.2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const GoogleIcon = styled(IoLogoGoogleplus)`
  color: #fff;
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;

const LoginText = styled.span`
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
`;

export default LoginButton;
