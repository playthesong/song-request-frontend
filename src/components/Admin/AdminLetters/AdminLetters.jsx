import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ReactHelmet from "../../../common/ReactHelmet";
import { ROLE } from "../../../constants/role";
import AdminMainTemplate from "../../Template/AdminMain/AdminMainTemplate";
import AdminPageTitle from "../AdminPageTitle";
import LetterConfigurationButtons from "./LetterConfigurationButtons";
import useModal from "../../../hooks/useModal";
import ConfirmModal from "./ConfirmModal";
import GlobalErrorHandler from "../../Error/GlobalErrorHandler";
import StatusBoard from "./StatusBoard";
import { getReadyToLetter } from "../../../modules/letters";
import realpianoLogo from "../../../assets/realpiano_logo_alt.png";

const AdminLetters = () => {
  const { currentUser, jwtToken } = useSelector(state => state.auth);
  const { readyToLetter, error } = useSelector(state => state.letters);
  const [isOpened, openModal, closeModal] = useModal();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReadyToLetter(jwtToken));
  }, [dispatch, jwtToken]);

  if (error) {
    return <GlobalErrorHandler error={error} />;
  }

  return (
    <>
      <ReactHelmet title={"신청곡 관리"} />
      <AdminMainTemplate>
        {!currentUser && <GlobalErrorHandler error />}
        {currentUser && currentUser.role === ROLE.ADMIN && (
          <AdminLettersBlock>
            <BackdropImage></BackdropImage>
            <AdminPageTitle>신청곡 설정</AdminPageTitle>
            <StatusBoard readyToLetter={readyToLetter} />
            <LetterConfigurationButtons
              jwtToken={jwtToken}
              readyToLetter={readyToLetter}
              openModal={openModal}
            />
            <ConfirmModal
              jwtToken={jwtToken}
              isOpened={isOpened}
              closeModal={closeModal}
            />
          </AdminLettersBlock>
        )}
      </AdminMainTemplate>
    </>
  );
};

const AdminLettersBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 5rem;
`;

const BackdropImage = styled.div`
  background-image: url(${realpianoLogo});
  background-repeat: no-repeat;
  background-position: 50% 35%;
  background-size: 10rem 10rem;
  width: 100%;
  height: inherit;
  position: absolute;
  opacity: 0.1;
  z-index: -9;
`;

export default AdminLetters;
