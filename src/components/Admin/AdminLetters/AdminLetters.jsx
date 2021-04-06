import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ReactHelmet from "../../../common/ReactHelmet";
import { ROLE } from "../../../constants/role";
import AdminMainTemplate from "../../Template/AdminMain/AdminMainTemplate";
import AdminPageTitle from "../AdminPageTitle";
import LetterConfigurationButtons from "./LetterConfigurationButtons";
import useModal from "../../../hooks/useModal";
import ConfirmModal from "./ConfirmModal";
import GlobalErrorHandler from "../../Error/GlobalErrorHandler";

const AdminLetters = () => {
  const { currentUser, jwtToken } = useSelector(state => state.auth);
  const { error } = useSelector(state => state.letters);
  const [isOpened, openModal, closeModal] = useModal();

  if (error) {
    return <GlobalErrorHandler error={error} />;
  }

  return (
    <>
      <ReactHelmet title={"신청곡 관리"} />
      {currentUser && currentUser.role === ROLE.ADMIN && (
        <AdminMainTemplate>
          <AdminLettersBlock>
            <AdminPageTitle>신청곡 설정</AdminPageTitle>
            <LetterConfigurationButtons openModal={openModal} />
            <ConfirmModal
              jwtToken={jwtToken}
              isOpened={isOpened}
              closeModal={closeModal}
            />
          </AdminLettersBlock>
        </AdminMainTemplate>
      )}
    </>
  );
};

const AdminLettersBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AdminLetters;
