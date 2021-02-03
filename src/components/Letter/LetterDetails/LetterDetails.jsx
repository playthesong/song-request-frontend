import React, { useEffect, useState } from "react";
import ModalTemplate from "../../Modal/ModalTemplate";
import LetterDetailsHiddenMenu from "./LetterDetailsHiddenMenu";
import LetterModalForm from "../LetterModal/LetterModalContents/LetterModalForm";
import LetterDetailsSong from "./LetterDetailsSong";
import LetterDetailsSongStory from "./LetterDetailsSongStory";
import useForm from "../../../hooks/useForm";
import LetterModalTemplate from "../LetterModal/LetterModalTemplate";
import LetterDetailsUser from "./LetterDetailsUser";
import LetterModalDiv from "../LetterModal/LetterModalContents/LetterModalDiv";
import LetterDetailsHiddenMenuButton from "./LetterDetailsHiddenMenuButton";
import LetterDetailsButton from "./LetterDetailsButton";

const LetterDetails = ({
  letter,
  isOpened,
  onCloseModal,
  changeToForm,
  changeToRead,
  openMenu,
  toggleMenu,
  visible,
  onVisible,
  onInvisible
}) => {
  const { id, song, songStory, createdDateTime, user } = letter;

  return (
    <ModalTemplate isOpened={isOpened}>
      <LetterModalTemplate onMouseEnter={onVisible} onMouseLeave={onInvisible}>
        <LetterDetailsHiddenMenuButton visible={visible} onClick={toggleMenu} />
        {openMenu && <LetterDetailsHiddenMenu changeToForm={changeToForm} />}
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
