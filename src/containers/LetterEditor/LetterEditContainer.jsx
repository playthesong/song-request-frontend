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
  const dispatch = useDispatch();

  const { titleError, artistError, imageUrlError, songStoryError } = letterForm;

  const { user, id: letterId } = letter;

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

  return (
    <LetterEditor
      letterId={letterId}
      letterForm={letterForm}
      user={user}
      onChange={onChange}
      onSubmit={onUpdate}
      onCloseModal={onCloseModal}
    />
  );
};

export default LetterEditContainer;
