import React from "react";
import ModalTemplate from "../Template/Modal/ModalTemplate";
import LetterDetailsSong from "./LetterDetailsSong";
import LetterDetailsSongStory from "./LetterDetailsSongStory";
import LetterModalTemplate from "../Template/LetterModal/LetterModalTemplate";
import LetterDetailsUser from "./LetterDetailsUser";
import LetterModalDiv from "../LetterModal/LetterModalContents/LetterModalDiv";
import LetterModalHiddenButtonContainer from "../../containers/LetterModal/LetterModalHiddenButtonContainer";
import LetterModalButton from "../LetterModal/LetterModalButton/LetterModalButton";

const LetterDetails = ({ letter, onCloseModal }) => {
  const { song, songStory, createdDateTime, user } = letter;

  return (
    <ModalTemplate>
      <LetterModalTemplate>
        <LetterModalHiddenButtonContainer />
        <LetterModalDiv>
          <LetterDetailsSong song={song} />
          <LetterDetailsSongStory songStory={songStory} />
          <LetterDetailsUser user={user} createdDateTime={createdDateTime} />
          <LetterModalButton type={"button"} onClick={onCloseModal}>
            CLOSE
          </LetterModalButton>
        </LetterModalDiv>
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterDetails;
