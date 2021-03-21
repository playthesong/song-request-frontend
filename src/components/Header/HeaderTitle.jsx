import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import realpiano_logo from "../../assets/realpiano_logo_white.jpg";

const HeaderTitle = () => {
  return (
    <Link to="/">
      <HeaderTitleBlock>
        <img src={realpiano_logo} alt="REALPIANO" className="logo" />
        <h2 className="title">REALPIANO</h2>
      </HeaderTitleBlock>
    </Link>
  );
};

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

  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 2.5rem;
  }
`;

export default HeaderTitle;
