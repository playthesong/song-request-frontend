import React from "react";
import styled from "styled-components";

const avatarUrl =
  "https://avatars.githubusercontent.com/u/49878687?s=460&u=e739e45e9f39b5200339cca6dc293f934fa03bc0&v=4";

const UserProfile = () => {
  return (
    <UserProfileBlock>
      <span className="username">Museop Kim</span>
      <img src={avatarUrl} alt="프로필 사진" className="user-avatar" />
    </UserProfileBlock>
  );
};

const UserProfileBlock = styled.div``;

export default UserProfile;
