import React, { useEffect, useState } from "react";
import ModalTemplate from "../Layout/Modal/ModalTemplate";
import LetterDetailsSong from "./LetterDetailsSong";
import LetterDetailsSongStory from "./LetterDetailsSongStory";
import LetterModalTemplate from "../Layout/LetterModal/LetterModalTemplate";
import LetterDetailsUser from "./LetterDetailsUser";
import LetterModalDiv from "../LetterModal/LetterModalContents/LetterModalDiv";
import LetterModalHiddenButtonContainer from "../../containers/LetterModal/LetterModalHiddenButtonContainer";
import LetterModalButtonContainer from "../../containers/LetterModal/LetterModalButtonContainer";
import { useSelector } from "react-redux";

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
