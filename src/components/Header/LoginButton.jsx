import React from "react";
import styled from "styled-components";
import { IoLogoGoogleplus } from "react-icons/io";

const LoginButton = () => {
  return (
    <LoginButtonBlock href="https://backend.realpianolive.com/oauth2/authorization/google">
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
  border-radius: 1.2rem;

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
