import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import realpiano_logo from "../../assets/realpiano_logo_white.jpg";

const HeaderTitle = () => {
  return (
    <StyledLink to="/">
      <HeaderTitleBlock>
        <img src={realpiano_logo} alt="REALPIANO" className="logo" />
        <h2 className="title">REALPIANO</h2>
      </HeaderTitleBlock>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  @media ${({ theme }) => theme.device.mobile} {
    order: 2;
  }
`;

const HeaderTitleBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: inherit;
  cursor: pointer;

  .logo {
    max-width: 2.5rem;
    max-height: 2.5rem;
    width: auto;
    height: auto;
  }

  .title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-left: 5px;
    margin-top: 10px;
  }
`;

export default HeaderTitle;
