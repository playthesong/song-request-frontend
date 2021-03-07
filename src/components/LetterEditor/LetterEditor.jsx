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

const LetterEditor = ({ letterForm, user, onChange, onSubmit }) => {
  const { title, artist, imageUrl, songStory } = letterForm;

  return (
    <ModalTemplate>
      <LetterModalTemplate>
        <LetterModalHiddenButtonContainer />
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
            EDIT
          </LetterModalButton>
        </LetterModalForm>
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterEditor;
