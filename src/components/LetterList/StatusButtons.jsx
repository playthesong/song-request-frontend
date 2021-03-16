import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { LETTER_STATUS, LIST_TITLE } from "../../constants/letterStatus";
import { getLetters } from "../../modules/letters";

const StatusButtons = ({ status }) => {
  const dispatch = useDispatch();

  const getWaitingLetters = () => {
    dispatch(getLetters(LETTER_STATUS.WAITING));
  };

  const getPendingLetters = () => {
    dispatch(getLetters(LETTER_STATUS.PENDING));
  };

  const getDoneLetters = () => {
    dispatch(getLetters(LETTER_STATUS.DONE));
  };

  return (
    <ButtonList>
      <Button onClick={getWaitingLetters}>{LIST_TITLE.WAITING}</Button>
      <Button onClick={getPendingLetters}>{LIST_TITLE.PENDING}</Button>
      <Button onClick={getDoneLetters}>{LIST_TITLE.DONE}</Button>
    </ButtonList>
  );
};

const ButtonList = styled.ul``;

const Button = styled.li`
  cursor: pointer;
`;

export default StatusButtons;
