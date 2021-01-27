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
  width: 100%;
  position: fixed;
  box-shadow: 0px -15px 15px 5px #999999;
`;

const HeaderInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  width: 1200px;
  background-color: #ffffff;
  height: 80px;
  margin: 0 auto;
`;

export default Header;
