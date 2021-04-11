import React from "react";
import styled from "styled-components";

const Copyright = () => {
  return (
    <CopyrightBlock>
      <CopyrighterName>&copy; Museop Kim</CopyrighterName>
    </CopyrightBlock>
  );
};

const CopyrightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrighterName = styled.p`
  color: #fff;
  font-weight: #fff;
  margin-top: 0.5rem;
  font-size: 1.1rem;
`;

export default Copyright;
