import React from "react";
import styled from "styled-components";

const AdminMainTemplate = ({ children }) => {
  return <AdminMainTemplateBlock>{children}</AdminMainTemplateBlock>;
};

const AdminMainTemplateBlock = styled.div`
  margin: 5rem 0rem 0rem 0rem;
  width: 100%;
  min-height: calc(100vh - 27rem);

  @media ${({ theme }) => theme.device.mobile} {
    width: 100vw;
    margin: 10rem 0rem 0rem 0rem;
  }
`;

export default AdminMainTemplate;
