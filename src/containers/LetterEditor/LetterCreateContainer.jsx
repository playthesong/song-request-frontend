import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterEditor from "../../components/LetterEditor/LetterEditor";
import { FORM_ERROR_MESSAGE } from "../../constants/errorMessage";
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

const LetterCreateContainer = ({
  currentUser,
  inActivateScroll,
  onCloseModal
}) => {
  const { letterForm } = useSelector(state => state);
  const {
    title,
    artist,
    imageUrl,
    songStory,
    titleError,
    artistError,
    imageUrlError,
    songStoryError,
    errorMessage
  } = letterForm;
  const dispatch = useDispatch();

  console.log(errorMessage);

  const onChange = event => {
    const { name, value } = event.target;
    validateValues(name, value);
    dispatch(updateForm(name, value));
  };

  const validateValues = (name, value) => {
    switch (name) {
      case FORM.TITLE:
        value.length > FORM.TITLE_MAX || value.length < FORM.TITLE_MIN
          ? dispatch(setErrorTitle(true, null))
          : dispatch(setErrorTitle(false, null));
        break;
      case FORM.ARTIST:
        value.length > FORM.ARTIST_MAX || value.length < FORM.ARTIST_MIN
          ? dispatch(setErrorArtist(true, null))
          : dispatch(setErrorArtist(false, null));
        break;
      case FORM.IMAGE_URL:
        value.length > FORM.IMAGE_URL_MAX
          ? dispatch(setErrorImageUrl(true, null))
          : dispatch(setErrorImageUrl(false, null));
        break;
      case FORM.SONG_STORY:
        value.length > FORM.SONG_STORY_MAX
          ? dispatch(setErrorSongStory(true, null))
          : dispatch(setErrorSongStory(false, null));
        break;
      default:
        break;
    }
  };

  const onCreate = event => {
    event.preventDefault();

    if (title.length === 0 || titleError) {
      dispatch(setErrorTitle(true, FORM_ERROR_MESSAGE.TITLE));
      return;
    }

    if (artist.length === 0 || artistError) {
      dispatch(setErrorArtist(true, FORM_ERROR_MESSAGE.ARTIST));
      return;
    }

    if (imageUrlError) {
      dispatch(setErrorImageUrl(true, FORM_ERROR_MESSAGE.IMAGE_URL));
      return;
    }

    if (songStoryError) {
      dispatch(setErrorSongStory(true, FORM_ERROR_MESSAGE.SONG_STORY));
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
      currentUser={currentUser}
      onChange={onChange}
      onSubmit={onCreate}
      errorMessage={errorMessage}
      inActivateScroll={inActivateScroll}
      onCloseModal={onCloseModal}
    />
  );
};

export default LetterCreateContainer;
