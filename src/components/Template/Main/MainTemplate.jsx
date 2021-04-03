import React from "react";
import styled from "styled-components";

const MainTemplate = ({ children }) => {
  return (
    <MainTemplateBlock>
      <MainTemplateInner>{children}</MainTemplateInner>
    </MainTemplateBlock>
  );
};

const MainTemplateBlock = styled.div`
  width: 100%;
  min-height: calc(100vh - 16rem);
  display: flex;
  justify-content: center;
  padding-top: 7rem;

  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 7rem;
    min-height: calc(100vh - 21rem);
  }
`;

const MainTemplateInner = styled.div`
  max-width: 1100px;
  width: 100%;
  padding: 0rem 5rem;

  @media ${({ theme }) => theme.device.mobile} {
    padding: 0rem 1rem;
  }
`;

export default MainTemplate;
