import React from "react";
import styled from "styled-components";

const AdminPageTitle = ({ children }) => {
  return <Title>{children}</Title>;
};

const Title = styled.h3`
  font-size: 1.7rem;
  color: rgba(0, 0, 0, 0.5);
  text-align: center;
`;

export default AdminPageTitle;
