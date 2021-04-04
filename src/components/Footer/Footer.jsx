import React from "react";
import styled, { css } from "styled-components";
import Copyright from "./Copyright";
import LogoIcons from "./LogoIcons";

const Footer = () => {
  return (
    <FooterBlock>
      <FooterInner>
        <LogoIcons />
        <Copyright />
      </FooterInner>
    </FooterBlock>
  );
};

const FooterBlock = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 19rem;
  margin-top: 6rem;
  background-color: #1e2429;
  font-weight: 500;
  box-shadow: 0px -10px 35px 5px rgba(0, 0, 0, 0.1);
`;

const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1100px;
  width: 80%;
  display: flex;
  justify-content: center;
`;

export default Footer;
