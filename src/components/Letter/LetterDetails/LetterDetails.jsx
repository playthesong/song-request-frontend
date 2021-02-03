import React, { useEffect, useState } from "react";
import ModalTemplate from "../../Modal/ModalTemplate";
import LetterDetailsSong from "./LetterDetailsSong";
import LetterDetailsSongStory from "./LetterDetailsSongStory";
import LetterModalTemplate from "../LetterModal/LetterModalTemplate";
import LetterDetailsUser from "./LetterDetailsUser";
import LetterModalDiv from "../LetterModal/LetterModalContents/LetterModalDiv";
import LetterDetailsButton from "./LetterDetailsButton";
import LetterDetailsHiddenMenu from "./LetterDetailsHiddenMenu";
import useMouseEnter from "../../../hooks/useMouseOver";

const LetterDetails = ({ letter, isOpened, onCloseModal, changeToForm }) => {
  const { song, songStory, createdDateTime, user } = letter;
  const [mouseEnter, onMouseEnter, onMouseLeave] = useMouseEnter();

  return (
    <ModalTemplate isOpened={isOpened}>
      <LetterModalTemplate
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <LetterDetailsHiddenMenu
          mouseEnter={mouseEnter}
          changeToForm={changeToForm}
        />
        <LetterModalDiv>
          <LetterDetailsSong song={song} />
          <LetterDetailsSongStory songStory={songStory} />
          <LetterDetailsUser user={user} createdDateTime={createdDateTime} />
          <LetterDetailsButton onClick={onCloseModal} />
        </LetterModalDiv>
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterDetails;
