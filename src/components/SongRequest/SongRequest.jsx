import React from "react";
import styled from "styled-components";
import MainTemplate from "../Main/MainTemplate";

const SongRequest = () => {
  return (
    <MainTemplate>
      <SongRequestBlock></SongRequestBlock>
    </MainTemplate>
  );
};

const SongRequestBlock = styled.div`
  width: 1200px;
  background-color: black;
`;

export default SongRequest;
