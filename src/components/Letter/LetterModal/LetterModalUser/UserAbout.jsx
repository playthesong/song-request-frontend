import React from "react";
import styled from "styled-components";

const UserAbout = ({ username, avatarUrl }) => {
  return (
    <UserAboutBlock>
      <UserImage src={avatarUrl} />
      <Username>{username}</Username>
    </UserAboutBlock>
  );
};

const UserAboutBlock = styled.div`
  display: flex;
  align-items: center;
`;

const UserImage = styled.img`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.5);
`;

const Username = styled.span`
  margin-left: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
`;

export default UserAbout;
