import React from "react";
import ModalTemplate from "../Template/Modal/ModalTemplate";
import LetterDetailsSong from "./LetterDetailsSong";
import LetterDetailsSongStory from "./LetterDetailsSongStory";
import LetterModalTemplate from "../Template/LetterModal/LetterModalTemplate";
import LetterDetailsUser from "./LetterDetailsUser";
import LetterModalDiv from "../LetterModal/LetterModalContents/LetterModalDiv";
import LetterModalHiddenButtonContainer from "../../containers/LetterModal/LetterModalHiddenButtonContainer";
import LetterModalButtonContainer from "../../containers/LetterModal/LetterModalButtonContainer";

const LetterDetails = ({ letter }) => {
  const { song, songStory, createdDateTime, user } = letter;

  return (
    <ModalTemplate>
      <LetterModalTemplate>
        <LetterModalHiddenButtonContainer />
        <LetterModalDiv>
          <LetterDetailsSong song={song} />
          <LetterDetailsSongStory songStory={songStory} />
          <LetterDetailsUser user={user} createdDateTime={createdDateTime} />
          <LetterModalButtonContainer />
        </LetterModalDiv>
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterDetails;
