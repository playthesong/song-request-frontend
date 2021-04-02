import React from "react";
import styled from "styled-components";
import GlobalErrorHandler from "../Error/GlobalErrorHandler";
import Letter from "../Letter/Letter";
import Loading from "../Loading/Loading";
import EmptyResult from "../EmptyResult/EmptyResult";

const LetterList = ({ letters, currentUser, loading, error }) => {
  return (
    <LetterListBlock>
      {loading && <Loading position={50} />}
      {error && <GlobalErrorHandler error={error} />}
      {letters && letters.length === 0 && (
        <EmptyResult
          message={"리얼피아노는 여러분의 신청곡과 사연을 기다립니다."}
          opacity={0.3}
        />
      )}
      {letters &&
        letters.map(letter => (
          <Letter
            key={letter.id}
            id={letter.id}
            currentUser={currentUser}
            user={letter.account}
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
