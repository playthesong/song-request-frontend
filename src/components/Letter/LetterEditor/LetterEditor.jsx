import React from "react";
import ModalTemplate from "../../Modal/ModalTemplate";
import LetterModalForm from "../LetterModal/LetterModalContents/LetterModalForm";
import LetterModalTemplate from "../LetterModal/LetterModalTemplate";
import LetterEditorSong from "./LetterEditorSong";
import LetterEditorSongStory from "./LetterEditorSongStory";
import LetterEditorUser from "./LetterEditorUser";
import LetterModalHiddenButtonContainer from "../../../containers/LetterModalHiddenButtonContainer";
import LetterModalButtonContainer from "../../../containers/LetterModalButtonContainer";
import LetterEditorSearchButton from "./LetterEditorSearchButton";

const LetterEditor = ({ form, onChange, onClear, user }) => {
  return (
    <ModalTemplate>
      <LetterModalTemplate>
        <LetterModalHiddenButtonContainer />
        <LetterEditorSearchButton />
        <LetterModalForm>
          <LetterEditorSong form={form} onChange={onChange} />
          <LetterEditorSongStory form={form} onChange={onChange} />
          <LetterEditorUser user={user} />
          <LetterModalButtonContainer />
        </LetterModalForm>
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterEditor;
