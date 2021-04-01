import React, { useEffect } from "react";
import ModalTemplate from "../Template/Modal/ModalTemplate";
import LetterDetailsSong from "./LetterDetailsSong";
import LetterDetailsSongStory from "./LetterDetailsSongStory";
import LetterModalTemplate from "../Template/LetterModal/LetterModalTemplate";
import LetterDetailsUser from "./LetterDetailsUser";
import LetterModalDiv from "../LetterModal/LetterModalContents/LetterModalDiv";
import LetterModalHiddenButtonContainer from "../../containers/LetterModal/LetterModalHiddenButtonContainer";
import LetterModalButton from "../LetterModal/LetterModalButton/LetterModalButton";
import Loading from "../Loading/Loading";
import GlobalErrorHandler from "../Error/GlobalErrorHandler";

const LetterDetails = ({
  letter,
  loading,
  error,
  currentUser,
  inActivateScroll,
  onCloseModal
}) => {
  useEffect(() => {
    inActivateScroll();
  });

  console.log(">>>>>>>>>>>>>>>>>> Details", letter);

  return (
    <ModalTemplate>
      <LetterModalTemplate>
        {loading && <Loading position={50} />}
        {error && <GlobalErrorHandler error={error} />}
        {letter && (
          <>
            <LetterModalHiddenButtonContainer
              user={letter.account}
              currentUser={currentUser}
              onCloseModal={onCloseModal}
            />
            <LetterModalDiv>
              <LetterDetailsSong song={letter.song} />
              <LetterDetailsSongStory songStory={letter.songStory} />
              <LetterDetailsUser
                user={letter.account}
                createdDateTime={letter.createdDateTime}
              />
              <LetterModalButton type={"button"} onClick={onCloseModal}>
                닫기
              </LetterModalButton>
            </LetterModalDiv>
          </>
        )}
      </LetterModalTemplate>
    </ModalTemplate>
  );
};

export default LetterDetails;
