import React from "react";
import ModalTemplate from "../Template/Modal/ModalTemplate";
import LetterDetailsSong from "./LetterDetailsSong";
import LetterDetailsSongStory from "./LetterDetailsSongStory";
import LetterModalTemplate from "../Template/LetterModal/LetterModalTemplate";
import LetterDetailsUser from "./LetterDetailsUser";
import LetterModalDiv from "../LetterModal/LetterModalContents/LetterModalDiv";
import LetterModalHiddenButtonContainer from "../../containers/LetterModal/LetterModalHiddenButtonContainer";
import LetterModalButton from "../LetterModal/LetterModalButton/LetterModalButton";

const LetterDetails = ({ letter, loading, error, onCloseModal }) => {
  return (
    <ModalTemplate>
      <LetterModalTemplate>
        {loading && <div>LOADING!</div>}
        {error && <div>ERROR!</div>}
        {letter && (
          <>
            <LetterModalHiddenButtonContainer onCloseModal={onCloseModal} />
            <LetterModalDiv>
              <LetterDetailsSong song={letter.song} />
              <LetterDetailsSongStory songStory={letter.songStory} />
              <LetterDetailsUser
                user={letter.user}
                createdDateTime={letter.createdDateTime}
              />
              <LetterModalButton type={"button"} onClick={onCloseModal}>
                CLOSE
              </LetterModalButton>
            </LetterModalDiv>
          </>
        )}
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterDetails;
