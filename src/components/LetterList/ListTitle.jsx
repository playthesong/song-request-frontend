import React from "react";
import styled from "styled-components";
import { LETTER_STATUS, LIST_TITLE } from "../../constants/letterStatus";

const ListTitle = ({ status }) => {
  let titleText;

  if (status === LETTER_STATUS.WAITING) {
    titleText = LIST_TITLE.WAITING;
  }

  if (status === LETTER_STATUS.DONE) {
    titleText = LIST_TITLE.DONE;
  }

  if (status === LETTER_STATUS.PENDING) {
    titleText = LIST_TITLE.PENDING;
  }

  return (
    <TitleBlock>
      <Title>{titleText}</Title>
    </TitleBlock>
  );
};

const TitleBlock = styled.div`
  flex-basis: 8rem;
  flex-shrink: 0;
`;

const Title = styled.h3`
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 0 0 1rem 0;
  border-bottom: 2px solid #f06595;
`;

export default ListTitle;
