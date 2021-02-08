import React from "react";
import styled from "styled-components";
import HeaderTitle from "./HeaderTitle";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderInner>
        <HeaderTitle />
        <Navigation />
        <UserProfile />
      </HeaderInner>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  box-shadow: 0px 15px 30px 10px #f1f1f1;
  z-index: 9;
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
`;

export default Header;
