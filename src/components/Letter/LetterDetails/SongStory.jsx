import React from "react";
import styled from "styled-components";

const SongStory = () => {
  return (
    <SongStoryBlock>
      <p className="story">사연 입니다.</p>
      <span className="created-time">2021-01-31 15:19</span>
    </SongStoryBlock>
  );
};

const SongStoryBlock = styled.div`
  margin: 2rem 0.7rem;
  min-height: 5rem;
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
