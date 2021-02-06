import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import LetterEditor from "../components/Letter/LetterEditor/LetterEditor";
import { initializeForm, updateForm } from "../modules/letterForm";

const LetterEditContainer = ({ letter }) => {
  const dispatch = useDispatch();
  const user = letter.user;

  const onChange = event => {
    const { name, value } = event.target;
    dispatch(updateForm(name, value));
  };

  useEffect(() => {
    dispatch(initializeForm(letter));
  }, [dispatch, letter]);

  return <LetterEditor user={user} onChange={onChange} />;
};

export default LetterEditContainer;
