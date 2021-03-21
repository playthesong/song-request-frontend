import React from "react";
import ModalTemplate from "../Template/Modal/ModalTemplate";
import LetterModalForm from "../LetterModal/LetterModalContents/LetterModalForm";
import LetterModalTemplate from "../Template/LetterModal/LetterModalTemplate";
import LetterEditorSong from "./LetterEditorSong";
import LetterEditorSongStory from "./LetterEditorSongStory";
import LetterEditorUser from "./LetterEditorUser";
import LetterModalHiddenButtonContainer from "../../containers/LetterModal/LetterModalHiddenButtonContainer";
import LetterEditorSearchButton from "./LetterEditorSearchButton";
import LetterModalButton from "../LetterModal/LetterModalButton/LetterModalButton";
import { AUTH } from "../../constants/auth";
import { useSelector } from "react-redux";
import { LETTER_MODAL } from "../../constants/types";

const LetterEditor = ({ letterForm, onChange, onSubmit, onCloseModal }) => {
  const { modalType } = useSelector(state => state.letterModal);
  const { title, artist, imageUrl, songStory } = letterForm;
  const user = JSON.parse(localStorage.getItem(AUTH.USER));

  let buttonName;

  if (modalType === LETTER_MODAL.CREATE) {
    buttonName = "등록";
  }

  if (modalType === LETTER_MODAL.EDIT) {
    buttonName = "수정";
  }

  if (!user) {
    return null;
  }

  return (
    <ModalTemplate>
      <LetterModalTemplate>
        <LetterModalHiddenButtonContainer onCloseModal={onCloseModal} />
        <LetterEditorSearchButton />
        <LetterModalForm>
          <LetterEditorSong
            title={title}
            artist={artist}
            imageUrl={imageUrl}
            onChange={onChange}
          />
          <LetterEditorSongStory songStory={songStory} onChange={onChange} />
          <LetterEditorUser user={user} />
          <LetterModalButton type={"submit"} onClick={onSubmit}>
            {buttonName}
          </LetterModalButton>
        </LetterModalForm>
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterEditor;
