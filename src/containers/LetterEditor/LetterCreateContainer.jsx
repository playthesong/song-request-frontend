import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterEditor from "../../components/LetterEditor/LetterEditor";
import { FORM } from "../../constants/form";
import { LETTER_MODAL } from "../../constants/types";
import { createLetter } from "../../modules/letter";
import {
  clearForm,
  setErrorArtist,
  setErrorImageUrl,
  setErrorSongStory,
  setErrorTitle,
  updateForm
} from "../../modules/letterForm";
import { changeModalType } from "../../modules/letterModal";
import { getLetters } from "../../modules/letters";

const LetterCreateContainer = ({ onCloseModal, modalType }) => {
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
  const dispatch = useDispatch();

  const onChange = event => {
    const { name, value } = event.target;
    validateValues(name, value);
    dispatch(updateForm(name, value));
  };

  const validateValues = (name, value) => {
    switch (name) {
      case FORM.TITLE:
        value.length > FORM.TITLE_MAX || value.length < FORM.TITLE_MIN
          ? dispatch(setErrorTitle(true))
          : dispatch(setErrorTitle(false));
        break;
      case FORM.ARTIST:
        value.length > FORM.ARTIST_MAX || value.length < FORM.ARTIST_MIN
          ? dispatch(setErrorArtist(true))
          : dispatch(setErrorArtist(false));
        break;
      case FORM.IMAGE_URL:
        value.length > FORM.IMAGE_URL_MAX
          ? dispatch(setErrorImageUrl(true))
          : dispatch(setErrorImageUrl(false));
        break;
      case FORM.SONG_STORY:
        value.length > FORM.SONG_STORY_MAX
          ? dispatch(setErrorSongStory(true))
          : dispatch(setErrorSongStory(false));
        break;
      default:
        break;
    }
  };

  const onCreate = event => {
    event.preventDefault();
    validateValues();

    if (titleError || artistError || imageUrlError || songStoryError) {
      return;
    }

    const song = { title, artist, imageUrl };
    const newLetter = { song, songStory };

    dispatch(createLetter(newLetter));
    dispatch(clearForm());
    dispatch(changeModalType(LETTER_MODAL.READ));
    dispatch(getLetters());
  };

  useEffect(() => {
    return () => {
      dispatch(clearForm());
    };
  }, [dispatch]);

  return (
    <LetterEditor
      letterForm={letterForm}
      onChange={onChange}
      onSubmit={onCreate}
      onCloseModal={onCloseModal}
    />
  );
};

export default LetterCreateContainer;
