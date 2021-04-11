import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoImage from "../../assets/logo.png";

const HeaderTitle = () => {
  return (
    <StyledLink to="/">
      <HeaderTitleBlock>
        <img src={logoImage} alt="REALPIANO" className="logo" />
        <h2 className="title">Play The Song</h2>
      </HeaderTitleBlock>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  @media ${({ theme }) => theme.device.mobile} {
    order: 2;
    margin-top: 1.2rem;
  }
`;

const HeaderTitleBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: inherit;
  cursor: pointer;

  .logo {
    max-width: 3rem;
    max-height: 3rem;
    width: auto;
    height: auto;
    opacity: 0.8;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 7px;
    margin-top: 4.5px;
  }
`;

export default HeaderTitle;
