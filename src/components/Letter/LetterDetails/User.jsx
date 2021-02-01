import React from "react";
import styled from "styled-components";

const User = ({ user, createdDateTime }) => {
  const { username, avatarUrl } = user;
  return (
    <UserBlock>
      <span className="created-time">{createdDateTime}</span>
      <div className="user-about">
        <img src={avatarUrl} className="user-about__image" />
        <span className="user-about__username">{username}</span>
      </div>
    </UserBlock>
  );
};

const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.5rem;

  .created-time {
    margin-top: 1.2rem;
    font-size: 0.8rem;
    opacity: 0.6;
  }

  .user-about {
    display: flex;
    align-items: center;
  }

  .user-about__image {
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.5);
  }

  .user-about__username {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export default User;
