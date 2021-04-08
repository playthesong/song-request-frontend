import React from "react";
import styled from "styled-components";

const AdminMainTemplate = ({ children }) => {
  return <AdminMainTemplateBlock>{children}</AdminMainTemplateBlock>;
};

const AdminMainTemplateBlock = styled.div`
  margin: 4.5rem 10rem 0rem 10rem;
  min-width: 800px;
  width: 100%;
  min-height: calc(100vh - 27rem);
`;

export default AdminMainTemplate;
