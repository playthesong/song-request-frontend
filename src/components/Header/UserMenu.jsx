import React from "react";
import styled, { css } from "styled-components";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { logout } from "../../modules/auth";
import { Link } from "react-router-dom";

const UserMenu = ({ openMenu }) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <UserMenuBlock openMenu={openMenu}>
      <Link to="/mypage">
        <UserMenuButton>
          <ProfileIcon />
          My Page
        </UserMenuButton>
      </Link>
      <UserMenuButton onClick={onLogout}>
        <LogoutIcon />
        Logout
      </UserMenuButton>
    </UserMenuBlock>
  );
};

const UserMenuBlock = styled.ul`
  display: ${props => (props.openMenu ? "block" : "none")};
  position: absolute;
  top: 100%;
  right: 3%;
  box-shadow: 5px 3px 30px 1px rgba(0, 0, 0, 0.1);
  background: #fff;
  z-index: 999;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.2s;
  border-radius: 0.3rem;

  @media ${({ theme }) => theme.device.mobile} {
    right: 10%;
  }
`;

const UserMenuButton = styled.li`
  padding: 1rem 1.1rem;
  font-size: 1.1rem;
  border: 1px solid rgba(0, 0, 0, 0.03);
  border-collapse: collapse;
  opacity: 0.7;

  &:first-child {
    border-radius: 0.3rem 0.3rem 0rem 0rem;
  }

  &:last-child {
    border-radius: 0rem 0rem 0.3rem 0.3rem;
  }

  &:hover {
    color: #fff;
    opacity: 1;
    background: #faa2c1;

    & > * {
      color: #fff;
    }
  }
`;

const IconStyles = css`
  margin-right: 0.5rem;
  display: inline-block;
  vertical-align: middle;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.35);
`;

const ProfileIcon = styled(CgProfile)`
  ${IconStyles}
`;

const LogoutIcon = styled(CgLogOut)`
  ${IconStyles}
  margin-right: 0.35rem;
  margin-left: 0.2rem;
`;

export default UserMenu;
