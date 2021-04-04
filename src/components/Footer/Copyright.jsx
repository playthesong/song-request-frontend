import React from "react";
import styled from "styled-components";

const Copyright = () => {
  return (
    <CopyrightBlock>
      <Producer>
        <Description>
          <MadeBy>Made by</MadeBy> Great fan of RealPiano
        </Description>
        <Name>Museop Kim</Name>
      </Producer>
      <CopyrighterName>&copy; 2021 리얼피아노</CopyrighterName>
    </CopyrightBlock>
  );
};

const CopyrightBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.1rem;
`;

const Producer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

const MadeBy = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
`;

const Name = styled.span`
  margin-top: 0.7rem;
  font-size: 1rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.3);
`;

const CopyrighterName = styled.p`
  color: #fff;
  font-weight: #fff;
  margin-top: 1.7rem;
  font-size: 1.1rem;
`;

export default Copyright;
