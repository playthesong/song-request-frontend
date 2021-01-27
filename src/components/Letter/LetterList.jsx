import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import { mockLetters } from "../../mockData";

const LetterList = () => {
  return (
    <LetterListBlock>
      {mockLetters.map(letter => (
        <Letter
          key={letter.id}
          user={letter.user}
          song={letter.song}
          songStory={letter.songStory}
          createdDateTime={letter.createdDateTime}
        />
      ))}
    </LetterListBlock>
  );
};

const LetterListBlock = styled.ul``;

export default LetterList;
