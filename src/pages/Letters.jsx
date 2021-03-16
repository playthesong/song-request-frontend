import React, { useEffect } from "react";
import styled from "styled-components";
import MainTemplate from "../components/Template/Main/MainTemplate";
import LetterList from "../components/LetterList/LetterList";
import LetterModalContainer from "../containers/LetterModal/LetterModalContainer";
import ListTitle from "../components/LetterList/ListTitle";
import StatusButtons from "../components/LetterList/StatusButtons";
import CreateButton from "../components/LetterList/CreateButton";
import { useDispatch, useSelector } from "react-redux";
import { getLetters } from "../modules/letters";

const Letters = () => {
  const { data: letters, status, loading, error } = useSelector(
    state => state.letters
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLetters(status));
  }, [dispatch, status]);

  return (
    <MainTemplate>
      <LettersButtonBlock>
        <ListTitle status={status} />
        <StatusButtons status={status} />
        <CreateButton />
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
  margin-top: 3rem;
`;

export default Letters;
