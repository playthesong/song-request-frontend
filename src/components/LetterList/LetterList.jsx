import React from "react";
import styled from "styled-components";
import GlobalErrorHandler from "../Error/GlobalErrorHandler";
import Letter from "../Letter/Letter";
import Loading from "../Loading/Loading";
import EmptyList from "./EmptyList";

const LetterList = ({ letters, loading, error }) => {
  return (
    <LetterListBlock>
      {loading && <Loading position={50} />}
      {error && <GlobalErrorHandler error={error} />}
      {letters && letters.length === 0 && (
        <EmptyList
          message={"리얼피아노는 여러분의 신청곡과 사연을 기다립니다."}
          opacity={0.7}
        />
      )}
      {letters &&
        letters.map(letter => (
          <Letter
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
