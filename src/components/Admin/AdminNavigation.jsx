import React from "react";
import styled, { css } from "styled-components";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const AdminNavigation = () => {
  return (
    <AdminNavigationList>
      <Link to="/admin/users">
        <AdminNavigationItem>
          <UserIcon />
        </AdminNavigationItem>
      </Link>
      <Link to="/admin/letters">
        <AdminNavigationItem>
          <LetterIcon />
        </AdminNavigationItem>
      </Link>
    </AdminNavigationList>
  );
};

const AdminNavigationList = styled.ul`
  background-color: #f1f3f5;
  box-sizing: border-box;
  max-width: 7rem;
  width: 100%;
  height: calc(100vh - 8rem);
  margin-bottom: -6rem;
  box-shadow: 5px -5px 30px 1px rgba(0, 0, 0, 0.5);
  padding-top: 3.5rem;
  background: #1e2528;

  @media ${({ theme }) => theme.device.mobile} {
    height: 100vh;
  }
`;

const NavigationItemStyles = css`
  margin: 1.2rem 0rem;
  padding: 1.5rem 0rem;
  width: 100%;
  text-align: center;
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    border-right: 5px solid #faa2c1;

    & > * {
      color: #faa2c1;
    }
  }
`;

const AdminNavigationItem = styled.li`
  ${NavigationItemStyles}
`;

const IconStyles = css`
  font-size: 2.3rem;
  font-weight: 600;
  color: #fff;
`;

const LetterIcon = styled(AiOutlineMail)`
  ${IconStyles}
`;

const UserIcon = styled(AiOutlineUser)`
  ${IconStyles}
`;

export default AdminNavigation;
