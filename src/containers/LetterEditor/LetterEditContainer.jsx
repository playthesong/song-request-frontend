import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LetterEditor from "../../components/LetterEditor/LetterEditor";
import { FORM_ERROR_MESSAGE } from "../../constants/errorMessage";
import { FORM } from "../../constants/form";
import { LETTER_STATUS } from "../../constants/letterStatus";
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

const LetterEditContainer = ({
  letter,
  currentUser,
  inActivateScroll,
  onCloseModal,
  onUpdateLetters
}) => {
  const { letterForm } = useSelector(state => state);
  const dispatch = useDispatch();
  const {
    titleError,
    artistError,
    imageUrlError,
    songStoryError,
    errorMessage
  } = letterForm;

  const { user: account, id: letterId } = letter;

  const onChange = event => {
    const { name, value } = event.target;
    validateValues(name, value);
    dispatch(updateForm(name, value));
  };

  const validateValues = (name, value) => {
    switch (name) {
      case FORM.TITLE:
        value.replaceAll(" ", "").length < FORM.TITLE_MIN ||
        value.length < FORM.TITLE_MIN ||
        value.length > FORM.TITLE_MAX
          ? dispatch(setErrorTitle(true, FORM_ERROR_MESSAGE.TITLE))
          : dispatch(setErrorTitle(false, null));
        break;
      case FORM.ARTIST:
        value.replaceAll(" ", "").length < FORM.ARTIST_MIN ||
        value.length < FORM.ARTIST_MIN ||
        value.length > FORM.ARTIST_MAX
          ? dispatch(setErrorArtist(true, FORM_ERROR_MESSAGE.ARTIST))
          : dispatch(setErrorArtist(false, null));
        break;
      case FORM.IMAGE_URL:
        value.length > FORM.IMAGE_URL_MAX
          ? dispatch(setErrorImageUrl(true, FORM_ERROR_MESSAGE.IMAGE_URL))
          : dispatch(setErrorImageUrl(false, null));
        break;
      case FORM.SONG_STORY:
        value.length > FORM.SONG_STORY_MAX
          ? dispatch(setErrorSongStory(true, FORM_ERROR_MESSAGE.SONG_STORY))
          : dispatch(setErrorSongStory(false, null));
        break;
      default:
        break;
    }
  };

  const onUpdate = event => {
    event.preventDefault();

    if (titleError) {
      dispatch(setErrorTitle(true, FORM_ERROR_MESSAGE.TITLE));
      return;
    }

    if (artistError) {
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

    dispatch(
      updateLetter(letterId, {
        letterId,
        user: account,
        ...letterForm
      })
    );
    dispatch(clearForm());
    dispatch(changeModalType(LETTER_MODAL.READ));
    dispatch(getLetters(LETTER_STATUS.WAITING));
    onUpdateLetters();
  };

  useEffect(() => {
    dispatch(initializeForm(letter));
  }, [dispatch, letter]);

  return (
    <LetterEditor
      letterForm={letterForm}
      user={account}
      currentUser={currentUser}
      onChange={onChange}
      onSubmit={onUpdate}
      errorMessage={errorMessage}
      inActivateScroll={inActivateScroll}
      onCloseModal={onCloseModal}
    />
  );
};

export default LetterEditContainer;
