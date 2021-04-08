import React from "react";
import styled from "styled-components";
import HeaderTitle from "./HeaderTitle";
import Navigation from "./Navigation";
import LoginButton from "./LoginButton";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";
import { Redirect } from "react-router";

const Header = () => {
  const { currentUser, error } = useSelector(({ auth }) => auth);

  if (error) {
    return <Redirect to="/error" />;
  }

  return (
    <>
      <HeaderBlock>
        <HeaderInner>
          <HeaderTitle />
          <Navigation />
          {currentUser ? <UserProfile user={currentUser} /> : <LoginButton />}
        </HeaderInner>
      </HeaderBlock>
      <HeaderSpacer />
    </>
  );
};

const HeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0px 3px 35px 5px #f1f1f1;
  z-index: 99;
`;

const HeaderInner = styled.div`
  padding: 0rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  max-width: 1100px;
  width: 100%;
  background-color: #ffffff;
  height: 80px;

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    padding: 0rem;
    height: 100%;
  }
`;

const HeaderSpacer = styled.div`
  height: 80px;

  @media ${({ theme }) => theme.device.mobile} {
    height: 130px;
  }
`;

export default Header;
