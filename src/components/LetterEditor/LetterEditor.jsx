import React, { useEffect } from "react";
import ModalTemplate from "../Layout/Modal/ModalTemplate";
import LetterModalForm from "../LetterModal/LetterModalContents/LetterModalForm";
import LetterModalTemplate from "../Layout/LetterModal/LetterModalTemplate";
import LetterEditorSong from "./LetterEditorSong";
import LetterEditorSongStory from "./LetterEditorSongStory";
import LetterEditorUser from "./LetterEditorUser";
import LetterModalHiddenButtonContainer from "../../containers/LetterModal/LetterModalHiddenButtonContainer";
import LetterModalButtonContainer from "../../containers/LetterModal/LetterModalButtonContainer";
import LetterEditorSearchButton from "./LetterEditorSearchButton";

const LetterEditor = ({ letterForm, user, onChange }) => {
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
          <LetterModalButtonContainer user={user} />
        </LetterModalForm>
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterEditor;
