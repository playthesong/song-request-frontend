import React from "react";
import styled from "styled-components";
import CreatedDateTime from "./CreatedDateTime";
import UserAbout from "./UserAbout";

const LetterModalUser = ({ user, createdDateTime }) => {
  const { username, avatarUrl } = user;
  return (
    <LetterUserModalBlock>
      <CreatedDateTime createdDateTime={createdDateTime} />
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

export default LetterModalUser;
