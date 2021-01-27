import React from "react";
import styled from "styled-components";

const MainTemplate = ({ children }) => {
  return <MainTemplateBlock>{children}</MainTemplateBlock>;
};

const MainTemplateBlock = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: center;
  padding-top: 80px;
`;

export default MainTemplate;
