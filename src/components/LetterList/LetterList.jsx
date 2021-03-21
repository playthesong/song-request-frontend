import React from "react";
import styled from "styled-components";
import LetterContainer from "../../containers/Letter/LetterContainer";

const LetterList = ({ letters, status, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!</div>;
  }

  if (!letters) {
    return null;
  }

  return (
    <LetterListBlock>
      {letters.map(letter => (
        <LetterContainer
          key={letter.id}
          id={letter.id}
          user={letter.user}
          song={letter.song}
          songStory={letter.songStory}
          createdDateTime={letter.createdDateTime}
        />
      ))}
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
