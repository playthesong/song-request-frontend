import React from "react";
import styled from "styled-components";
import LetterContainer from "../../containers/Letter/LetterContainer";
import Loading from "../Loading/Loading";

const LetterList = ({ letters, loading, error }) => {
  if (error) {
    return <div>ERROR!</div>;
  }

  return (
    <LetterListBlock>
      {loading && <Loading position={60} />}
      {letters &&
        letters.map(letter => (
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

  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    align-items: center;
    margin-top: 4.1rem;
  }
`;

export default LetterList;
