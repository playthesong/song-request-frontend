import React from "react";
import styled from "styled-components";
import LetterModalContainer from "../../containers/LetterModalContainer";
import Letter from "./Letter";

const LetterList = ({ letters, openedId, onOpenModal, onCloseModal }) => {
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
          onOpenModal={onOpenModal}
        />
      ))}
      <LetterModalContainer openedId={openedId} onCloseModal={onCloseModal} />
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
