import React from "react";
import styled from "styled-components";
import AdminMainTemplate from "../../Template/AdminMain/AdminMainTemplate";
import AdminPageTitle from "../AdminPageTitle";
import LetterConfigurationButtons from "./LetterConfigurationButtons";

const AdminLetters = () => {
  return (
    <AdminMainTemplate>
      <AdminLettersBlock>
        <AdminPageTitle>신청곡 설정</AdminPageTitle>
        <LetterConfigurationButtons />
      </AdminLettersBlock>
    </AdminMainTemplate>
  );
};

const AdminLettersBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AdminLetters;
