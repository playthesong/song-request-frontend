import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

const avatarUrl =
  "https://avatars.githubusercontent.com/u/49878687?s=460&u=e739e45e9f39b5200339cca6dc293f934fa03bc0&v=4";

const UserProfile = () => {
  return (
    <UserProfileBlock>
      <img src={avatarUrl} alt="프로필 사진" className="user-avatar" />
      <span className="username">Museop Kim</span>
      <MdKeyboardArrowDown className="reversed-triangle" />
    </UserProfileBlock>
  );
};

const UserProfileBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3px;
  cursor: pointer;

  .username {
    padding: 0px 9px;
    margin-top: 3px;
    opacity: 0.8;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .user-avatar {
    max-width: 32px;
    max-height: 32px;
    border-radius: 50%;
    margin-right: 1px;
  }

  .reversed-triangle {
    font-size: 1.6rem;
    opacity: 0.8;
  }
`;

export default UserProfile;
