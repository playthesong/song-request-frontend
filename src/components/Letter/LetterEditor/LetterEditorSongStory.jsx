import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";

const LetterEditorSongStory = ({ songStory, onChange }) => {
  return (
    <>
      <Textarea
        name="songStory"
        rows={2}
        maxRows={5}
        defaultValue={songStory}
        onChange={onChange}
        placeholder="사연을 입력 해주세요."
        maxLength="1000"
      />
      <BottomLine />
    </>
  );
};

const BottomLine = styled.div`
  height: 1.5px;
  background-color: rgba(0, 0, 0, 0.15);
  margin-top: 0.3rem;
  margin-right: 0.7rem;
  margin-left: 0.5rem;
  transition: 0.3s;
`;

const Textarea = styled(TextareaAutosize)`
  margin: 2rem 0.7rem;
  max-height: 12rem;
  line-height: 1.7rem;
  font-size: 1.2rem;
  font-family: inherit;
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

  &:focus {
    & + div {
      background-color: rgba(230, 73, 128, 0.7);
    }
  }
`;

export default LetterEditorSongStory;
