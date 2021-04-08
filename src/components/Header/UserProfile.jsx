import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserMenu from "./UserMenu";
import useToggle from "../../hooks/useToggle";

const UserProfile = ({ user }) => {
  const { openMenu, toggleMenu } = useToggle();
  const { name, avatarUrl } = user;

  return (
    <UserProfileBlock onClick={toggleMenu}>
      <UserImage src={avatarUrl} alt="프로필 사진" />
      <Username>{name}</Username>
      <MenuIcon />
      <UserMenu openMenu={openMenu} user={user} />
    </UserProfileBlock>
  );
};

const UserProfileBlock = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  margin-top: 3px;
  cursor: pointer;

  @media ${({ theme }) => theme.device.mobile} {
    order: 1;
    align-self: flex-end;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
  }
`;

const UserImage = styled.img`
  max-width: 3.2rem;
  max-height: 3.2rem;
  border-radius: 50%;

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 2.5rem;
    max-height: 2.5rem;
  }
`;

const Username = styled.span`
  padding: 0rem 0.9rem;
  margin-top: 0.3rem;
  opacity: 0.8;
  font-size: 1.2rem;
  font-weight: 500;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1rem;
    padding: 0rem;
    margin-left: 0.5rem;
  }
`;

const MenuIcon = styled(MdKeyboardArrowDown)`
  font-size: 1.6rem;
  opacity: 0.8;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.4rem;
    margin-top: 0.25rem;
  }
`;

export default UserProfile;
