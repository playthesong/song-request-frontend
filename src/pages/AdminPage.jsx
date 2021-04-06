import React from "react";
import { Route } from "react-router";
import AdminNavigation from "../components/Admin/AdminNavigation";

const AdminPage = () => {
  return (
    <>
      <AdminNavigation />
      <Route path="/admin/letters" />
      <Route path="/admin/users" />
    </>
  );
};

export default AdminPage;
