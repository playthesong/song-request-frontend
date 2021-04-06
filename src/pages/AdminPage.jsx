import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import AdminLetters from "../components/Admin/AdminLetters/AdminLetters";
import AdminNavigation from "../components/Admin/AdminNavigation";
import AdminUsers from "../components/Admin/AdminUsers/AdminUsers";

const AdminPage = () => {
  return (
    <AdminPageBlock>
      <AdminNavigation />
      <Route path="/admin/letters" component={AdminLetters} />
      <Route path="/admin/users" component={AdminUsers} />
    </AdminPageBlock>
  );
};

const AdminPageBlock = styled.div`
  display: flex;
`;

export default AdminPage;
