import React from "react";
import { useSelector } from "react-redux";
import ReactHelmet from "../../../common/ReactHelmet";
import { ROLE } from "../../../constants/role";
import AdminMainTemplate from "../../Template/AdminMain/AdminMainTemplate";
import AdminPageTitle from "../AdminPageTitle";

const AdminUsers = () => {
  const { currentUser } = useSelector(state => state.auth);

  return (
    <>
      <ReactHelmet title={"회원 목록"} />
      {currentUser && currentUser.role === ROLE.ADMIN && (
        <AdminMainTemplate>
          <AdminPageTitle>회원 목록</AdminPageTitle>
        </AdminMainTemplate>
      )}
    </>
  );
};

export default AdminUsers;
