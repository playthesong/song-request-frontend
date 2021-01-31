import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import LetterDetails from "./LetterDetails";

const LetterList = ({ letters, activatedId, onActivate, onCancel }) => {
  return (
    <LetterListBlock>
      {letters.map(letter => (
        <Letter
          key={letter.id}
          id={letter.id}
          user={letter.user}
          song={letter.song}
          songStory={letter.songStory}
          createdDateTime={letter.createdDateTime}
          onActivate={onActivate}
          onCancel={onCancel}
        />
      ))}
      <LetterDetails activatedId={activatedId} />
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
