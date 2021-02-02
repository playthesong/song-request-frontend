import React from "react";
import styled, { css } from "styled-components";
import TextareaAutosize from "react-autosize-textarea";

const SongStory = ({ songStory, isEdit }) => {
  if (isEdit) {
    return (
      <>
        <Textarea rows={2} maxRows={5} value={"사연입니다."} />
        <div className="bottom-line"></div>
      </>
    );
  }
  return <SongStoryBlock>{songStory}</SongStoryBlock>;
};

const CommonSongStoryStyles = css`
  margin: 2rem 0.7rem;
  min-height: 3.6rem;
  max-height: 12rem;
  line-height: 1.7rem;
  font-size: 1.2rem;
  font-family: inherit;
`;

const Textarea = styled(TextareaAutosize)`
  ${CommonSongStoryStyles}
  box-sizing: border-box;
  min-height: 3.6rem;
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  background-color: #fbfbfd;
  padding: 0rem 0.7rem 0rem 0rem;
  margin-bottom: 0.1rem;
  color: inherit;

  & + .bottom-line {
    height: 1.5px;
    background-color: rgba(0, 0, 0, 0.15);
    margin-top: 0.3rem;
    margin-right: 0.7rem;
    margin-left: 0.5rem;
    transition: 0.3s;
  }

  &:focus {
    & + .bottom-line {
      background-color: #ffdeeb;
    }
  }
`;

const SongStoryBlock = styled.p`
  ${CommonSongStoryStyles}
  overflow-y: scroll;
  padding-bottom: 0.9rem;
`;

export default SongStory;
