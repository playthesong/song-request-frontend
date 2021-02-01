import React from "react";
import styled from "styled-components";

const SongStory = ({ songStory, isEdit }) => {
  return <SongStoryBlock>{songStory}</SongStoryBlock>;
};

const SongStoryBlock = styled.p`
  margin: 2rem 0.7rem;
  min-height: 3rem;
  max-height: 12rem;
  overflow-y: scroll;
  font-size: 1.2rem;
  line-height: 1.7rem;
`;

export default SongStory;
