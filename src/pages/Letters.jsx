import React from "react";
import styled from "styled-components";
import MainTemplate from "../components/Template/Main/MainTemplate";
import LetterListContainer from "../containers/Letter/LetterListContainer";
import LetterModalContainer from "../containers/LetterModal/LetterModalContainer";

const Letters = () => {
  return (
    <MainTemplate>
      <LettersBlock>
        <ListTitle>신청 대기중</ListTitle>
        <LetterListContainer />
      </LettersBlock>
      <LetterModalContainer />
    </MainTemplate>
  );
};

const LettersBlock = styled.div``;

const ListTitle = styled.h2`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0 0 1rem 0;
  border-bottom: 2px solid #f06595;
`;

export default Letters;
