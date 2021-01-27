import React from "react";
import styled from "styled-components";

const MainTemplate = ({ children }) => {
  return <MainTemplateBlock>{children}</MainTemplateBlock>;
};

const MainTemplateBlock = styled.div`
  width: 100%;
  height: calc(100vh - 16rem);
  display: flex;
  justify-content: center;
  padding-top: 15rem;
`;

export default MainTemplate;
