import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLetters } from "../modules/letters";
import LetterList from "../components/Letter/LetterList";
import useDetails from "../hooks/useDetails";

const LetterListContainer = () => {
  const { data: letters, loading, error } = useSelector(state => state.letters);
  const dispatch = useDispatch();
  const [activatedId, onActivate, onCancel] = useDetails(null);

  useEffect(() => {
    dispatch(getLetters());
  }, [dispatch]);

  if (loading) {
    return <div>Now Loading...</div>;
  }

  if (error) {
    return <div>ERROR!</div>;
  }

  if (!letters) {
    return <div>아직 등록된 신청곡이 없습니다. 신청곡을 등록 해주세요.</div>;
  }

  return (
    <LetterList
      letters={letters}
      activatedId={activatedId}
      onActivate={onActivate}
      onCancel={onCancel}
    />
  );
};

export default LetterListContainer;
