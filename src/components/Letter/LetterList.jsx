import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import LetterDetails from "./LetterDetails";

const LetterList = ({ letters }) => {
  return (
    <LetterListBlock>
      {letters.map(letter => (
        <Letter
          key={letter.id}
          user={letter.user}
          song={letter.song}
          songStory={letter.songStory}
          createdDateTime={letter.createdDateTime}
        />
      ))}
      <LetterDetails />
    </LetterListBlock>
  );
};

const LetterListBlock = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 4.5rem;
`;

export default LetterList;
