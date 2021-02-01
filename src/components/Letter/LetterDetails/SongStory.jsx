import React from "react";
import styled from "styled-components";

const SongStory = ({ songStory }) => {
  return <SongStoryBlock>{songStory}</SongStoryBlock>;
};

const SongStoryBlock = styled.p`
  margin: 2rem 0.7rem;
  min-height: 2.7rem;
  max-height: 12rem;
  overflow-y: auto;

  .story {
    font-size: 1.25rem;
    line-height: 2.5rem;
  }

  .created-time {
    display: inline-block;
    width: 100%;
    margin-top: 2.5rem;
    text-align: right;
    font-weight: 500;
    font-size: 1.2rem;
    opacity: 0.5;
  }
`;

export default SongStory;
