import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterEditor from "../../components/LetterEditor/LetterEditor";
import { FORM } from "../../constants/form";
import { LETTER_MODAL } from "../../constants/types";
import { updateLetter } from "../../modules/letter";
import {
  clearForm,
  initializeForm,
  setErrorArtist,
  setErrorImageUrl,
  setErrorSongStory,
  setErrorTitle,
  updateForm
} from "../../modules/letterForm";
import { changeModalType } from "../../modules/letterModal";
import { getLetters } from "../../modules/letters";

const LetterEditContainer = ({ letter, onCloseModal }) => {
  const { letterForm } = useSelector(state => state);
  const {
    title,
    artist,
    imageUrl,
    songStory,
    titleError,
    artistError,
    imageUrlError,
    songStoryError
  } = letterForm;

  console.log(titleError);
  const dispatch = useDispatch();
  const user = letter.user;
  const letterId = letter.id;

  const onChange = event => {
    const { name, value } = event.target;

    dispatch(updateForm(name, value));
  };

  const validateValues = () => {
    title.length > FORM.TITLE_MAX || title.length < FORM.TITLE_MIN
      ? dispatch(setErrorTitle(true))
      : dispatch(setErrorTitle(false));

    artist.length > FORM.ARTIST_MAX || artist.length < FORM.ARTIST_MIN
      ? dispatch(setErrorArtist(true))
      : dispatch(setErrorArtist(false));

    imageUrl.length > FORM.IMAGE_URL_MAX
      ? dispatch(setErrorImageUrl(true))
      : dispatch(setErrorImageUrl(false));

    songStory.length > FORM.SONG_STORY_MAX
      ? dispatch(setErrorSongStory(true))
      : dispatch(setErrorSongStory(false));
  };

  const onUpdate = event => {
    event.preventDefault();
    validateValues();

    if (titleError || artistError || imageUrlError || songStoryError) {
      return;
    }

    dispatch(
      updateLetter(letterId, {
        letterId,
        user,
        ...letterForm
      })
    );
    dispatch(clearForm());
    dispatch(changeModalType(LETTER_MODAL.READ));
    dispatch(getLetters());
  };

  useEffect(() => {
    dispatch(initializeForm(letter));
  }, [dispatch, letter]);

  useEffect(() => {}, [
    dispatch,
    letter,
    titleError,
    artistError,
    imageUrlError,
    songStoryError
  ]);

  return (
    <LetterEditor
      letterForm={letterForm}
      user={user}
      onChange={onChange}
      onUpdate={onUpdate}
      onCloseModal={onCloseModal}
    />
  );
};

export default LetterEditContainer;
