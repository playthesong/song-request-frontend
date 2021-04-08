import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router";
import styled from "styled-components";
import AdminLetters from "../components/Admin/AdminLetters/AdminLetters";
import AdminNavigation from "../components/Admin/AdminNavigation";
import AdminUsers from "../components/Admin/AdminUsers/AdminUsers";
import GlobalErrorHandler from "../components/Error/GlobalErrorHandler";
import MainTemplate from "../components/Template/Main/MainTemplate";
import { ROLE } from "../constants/role";

const AdminPage = () => {
  const { currentUser } = useSelector(state => state.auth);

  if (!currentUser || (currentUser && currentUser.role !== ROLE.ADMIN)) {
    return (
      <MainTemplate>
        <GlobalErrorHandler error />
      </MainTemplate>
    );
  }

  return (
    <AdminPageBlock>
      {currentUser && currentUser.role === ROLE.ADMIN && <AdminNavigation />}
      <Route path="/admin/letters" component={AdminLetters} />
      <Route path="/admin/users" component={AdminUsers} />
    </AdminPageBlock>
  );
};

const AdminPageBlock = styled.div`
  display: flex;
`;

export default AdminPage;
