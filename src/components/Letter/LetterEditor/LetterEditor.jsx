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
import { useSelector } from "react-redux";

const LetterEditor = ({ user, onChange }) => {
  const { title, artist, imageUrl, songStory } = useSelector(
    state => state.letterForm
  );
  console.log(title, artist, imageUrl, songStory);

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
          <LetterModalButtonContainer />
        </LetterModalForm>
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterEditor;
