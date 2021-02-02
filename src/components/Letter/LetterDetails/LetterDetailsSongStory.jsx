import React from "react";
import styled from "styled-components";
import SongStoryTextarea from "../LetterModal/LetterModalSongStory/SongStoryTextarea";

const LetterDetailsSongStory = ({ songStory, isForm }) => {
  if (isForm) {
    return <SongStoryTextarea />;
  }
  return <LetterDetailsSongStoryBlock>{songStory}</LetterDetailsSongStoryBlock>;
};

const LetterDetailsSongStoryBlock = styled.p`
  margin: 2rem 0.7rem;
  min-height: 3.6rem;
  max-height: 12rem;
  line-height: 1.7rem;
  font-size: 1.2rem;
  font-family: inherit;
  overflow-y: scroll;
  padding-bottom: 0.9rem;
`;

export default LetterDetailsSongStory;
