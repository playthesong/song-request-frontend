import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
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
      <Button status={status} onClick={getWaitingLetters}>
        {LIST_TITLE.WAITING}
      </Button>
      <Button status={status} onClick={getPendingLetters}>
        {LIST_TITLE.PENDING}
      </Button>
      <Button status={status} onClick={getDoneLetters}>
        {LIST_TITLE.DONE}
      </Button>
    </ButtonList>
  );
};

const ActiveEffect = css`
  background: #f06595;
  color: white;
  border-radius: 5rem;
  opacity: 1;
`;

const HoverEffect = css`
  opacity: 0.9;

  @media ${({ theme }) => theme.device.mobile} {
    background: #f06595;
  }
`;

const ButtonList = styled.ul`
  box-sizing: border-box;
  display: flex;
  height: 3.2rem;
  border-radius: 5rem;
  box-shadow: 0px 1px 15px 0px rgba(5, 5, 5, 0.1);

  @media ${({ theme }) => theme.device.mobile} {
    order: 2;
    margin-top: 2rem;
    height: 2.7rem;
  }
`;

const Button = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0rem 1rem;
  opacity: 0.3;
  font-size: 1rem;
  font-weight: 500;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }

  ${({ status }) =>
    (status === LETTER_STATUS.WAITING &&
      css`
        &:first-child {
          ${ActiveEffect}
        }

        &:first-child:hover {
          ${HoverEffect}
        }
      `) ||
    (status === LETTER_STATUS.PENDING &&
      css`
        &:nth-child(2) {
          ${ActiveEffect}
        }

        &:nth-child(2):hover {
          ${HoverEffect}
        }
      `) ||
    (status === LETTER_STATUS.DONE &&
      css`
        &:nth-child(3) {
          ${ActiveEffect}
        }

        &:nth-child(3):hover {
          ${HoverEffect}
        }
      `)};
`;

export default StatusButtons;
