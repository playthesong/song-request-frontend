import React from "react";
import styled from "styled-components";

const LetterModalSongStory = ({ songStory }) => {
  return <SongStoryBlock>{songStory}</SongStoryBlock>;
};

const SongStoryBlock = styled.p`
  margin: 2rem 0.7rem;
  min-height: 3.6rem;
  max-height: 12rem;
  line-height: 1.7rem;
  font-size: 1.2rem;
  font-family: inherit;
  overflow-y: scroll;
  padding-bottom: 0.9rem;
`;

export default LetterModalSongStory;
