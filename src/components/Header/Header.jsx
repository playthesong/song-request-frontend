import React from "react";
import styled from "styled-components";
import HeaderTitle from "./HeaderTitle";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderTitle />
      <Navigation />
      <UserProfile />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default Header;
