import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterBlock>
      <p className="copyright">&copy; Museop Kim</p>
    </FooterBlock>
  );
};

const FooterBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 8rem;
  margin-top: 6rem;
  background-color: #f5f5f7;
  font-weight: 500;
  box-shadow: 0px -10px 35px 5px #f1f1f1;
`;

export default Footer;
