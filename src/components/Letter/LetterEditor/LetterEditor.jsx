import React from "react";
import ModalTemplate from "../../Modal/ModalTemplate";
import LetterModalForm from "../LetterModal/LetterModalContents/LetterModalForm";
import LetterModalTemplate from "../LetterModal/LetterModalTemplate";
import LetterEditorSong from "./LetterEditorSong";
import LetterEditorSongStory from "./LetterEditorSongStory";
import LetterEditorUser from "./LetterEditorUser";
import useMouseEnter from "../../../hooks/useMouseOver";
import { LETTER_EDITOR } from "../../../constants/types";
import LetterDetailsHiddenMenu from "../LetterDetails/LetterDetailsHiddenMenu";

const LetterEditor = ({
  type,
  form,
  onChange,
  onClear,
  user,
  isOpened,
  onCloseModal,
  changeToForm,
  changeToRead
}) => {
  const [mouseEnter, onMouseEnter, onMouseLeave] = useMouseEnter();

  return (
    <ModalTemplate isOpened={isOpened}>
      <LetterModalTemplate
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {type === LETTER_EDITOR.EDIT && (
          <LetterDetailsHiddenMenu
            mouseEnter={mouseEnter}
            changeToForm={changeToForm}
          />
        )}
        <LetterModalForm>
          <LetterEditorSong form={form} onChange={onChange} />
          <LetterEditorSongStory form={form} onChange={onChange} />
          <LetterEditorUser user={user} />
        </LetterModalForm>
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterEditor;
