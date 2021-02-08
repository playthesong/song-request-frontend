import React from "react";
import styled from "styled-components";
import UserAbout from "./UserAbout";

const LetterModalUser = ({ user, createdDateTime }) => {
  const { username, avatarUrl } = user;
  return (
    <LetterUserModalBlock>
      <CreatedDateTime>{createdDateTime}</CreatedDateTime>
      <UserAbout username={username} avatarUrl={avatarUrl} />
    </LetterUserModalBlock>
  );
};

const LetterUserModalBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.5rem;
`;

const CreatedDateTime = styled.span`
  margin-top: 1.2rem;
  font-size: 0.8rem;
  opacity: 0.6;
`;

export default LetterModalUser;
