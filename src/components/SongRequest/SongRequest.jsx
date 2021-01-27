import React from "react";
import styled from "styled-components";
import MainTemplate from "../Main/MainTemplate";
import LetterList from "../Letter/LetterList";

const SongRequest = () => {
  return (
    <MainTemplate>
      <SongRequestBlock>
        <LetterList />
      </SongRequestBlock>
    </MainTemplate>
  );
};

const SongRequestBlock = styled.div`
  max-width: 1100px;
`;

export default SongRequest;
