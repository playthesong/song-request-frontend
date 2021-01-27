import React from "react";
import styled from "styled-components";
import MainTemplate from "../Main/MainTemplate";
import LetterList from "../Letter/LetterList";

const SongRequest = () => {
  return (
    <MainTemplate>
      <SongRequestBlock>
        <ListTitle>신청 대기중</ListTitle>
        <LetterList />
      </SongRequestBlock>
    </MainTemplate>
  );
};

const SongRequestBlock = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const ListTitle = styled.h2`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0 0 1rem 0;
  border-bottom: 2px solid #f06595;
`;

export default SongRequest;
