import React, { useEffect } from "react";
import ModalTemplate from "../Template/Modal/ModalTemplate";
import LetterModalForm from "../LetterModal/LetterModalContents/LetterModalForm";
import LetterModalTemplate from "../Template/LetterModal/LetterModalTemplate";
import LetterEditorSong from "./LetterEditorSong";
import LetterEditorSongStory from "./LetterEditorSongStory";
import LetterEditorUser from "./LetterEditorUser";
import LetterModalHiddenButtonContainer from "../../containers/LetterModal/LetterModalHiddenButtonContainer";
import LetterModalButton from "../LetterModal/LetterModalButton/LetterModalButton";
import { useSelector } from "react-redux";
import { LETTER_MODAL } from "../../constants/types";
import FormError from "../Error/FormError";
import GlobalError from "../Error/GlobalError";
import { GLOBAL_ERROR_MESSAGE } from "../../constants/errorMessage";

const LetterEditor = ({
  letterForm,
  user,
  jwtToken,
  currentUser,
  onChange,
  onSubmit,
  errorMessage,
  inActivateScroll,
  onCloseModal
}) => {
  const { modalType } = useSelector(state => state.letterModal);
  const { title, artist, imageUrl, songStory } = letterForm;

  useEffect(() => {
    inActivateScroll();
  });

  let buttonName;

  if (modalType === LETTER_MODAL.CREATE) {
    buttonName = "등록";
  }

  if (modalType === LETTER_MODAL.EDIT) {
    buttonName = "수정";
  }

  return (
    <ModalTemplate>
      <LetterModalTemplate>
        {!currentUser && (
          <GlobalError errorMessage={GLOBAL_ERROR_MESSAGE.UNAUTHORIZED} />
        )}
        {currentUser && (
          <>
            <LetterModalHiddenButtonContainer
              user={user}
              currentUser={currentUser}
              onCloseModal={onCloseModal}
            />
            <LetterModalForm>
              <LetterEditorSong
                jwtToken={jwtToken}
                title={title}
                artist={artist}
                imageUrl={imageUrl}
                onChange={onChange}
              />
              <LetterEditorSongStory
                songStory={songStory}
                onChange={onChange}
              />
              {errorMessage && <FormError errorMessage={errorMessage} />}
              <LetterEditorUser user={currentUser} />
              <LetterModalButton type={"submit"} onClick={onSubmit}>
                {buttonName}
              </LetterModalButton>
            </LetterModalForm>
          </>
        )}
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterEditor;
