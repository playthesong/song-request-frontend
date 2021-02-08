import React from "react";
import styled from "styled-components";

const LetterModalSong = ({ children }) => {
  return <LetterModalSongBlock>{children}</LetterModalSongBlock>;
};

const LetterModalSongBlock = styled.div`
  display: flex;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
`;

export default LetterModalSong;
