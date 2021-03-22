import React, { useEffect } from "react";
import styled from "styled-components";
import MainTemplate from "../components/Template/Main/MainTemplate";
import LetterList from "../components/LetterList/LetterList";
import LetterModalContainer from "../containers/LetterModal/LetterModalContainer";
import ListTitle from "../components/LetterList/ListTitle";
import StatusButtons from "../components/LetterList/StatusButtons";
import ActionButtons from "../components/LetterList/ActionButtons";
import { useDispatch, useSelector } from "react-redux";
import { getLetters } from "../modules/letters";
import { LETTER_STATUS } from "../constants/letterStatus";

const Letters = () => {
  const { data: letters, status, loading, error } = useSelector(
    state => state.letters
  );
  const { currentUser } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLetters(LETTER_STATUS.WAITING));
  }, [dispatch]);

  return (
    <MainTemplate>
      <LettersButtonBlock>
        <ListTitle status={status} />
        <StatusButtons status={status} />
        <ActionButtons currentUser={currentUser} />
      </LettersButtonBlock>
      <LetterList
        letters={letters}
        status={status}
        loading={loading}
        error={error}
      />
      <LetterModalContainer />
    </MainTemplate>
  );
};

const LettersButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7rem;
  margin: 0rem 1.2rem 1rem 1.2rem;

  @media ${({ theme }) => theme.device.mobile} {
    position: relative;
    flex-direction: column;
    height: unset;
  }
`;

export default Letters;
