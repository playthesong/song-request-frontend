import React from "react";
import styled from "styled-components";

const User = () => {
  return (
    <UserBlock>
      <span className="created-time">2021년 2월 1일 1시 59분</span>
      <div className="user-about">
        <img
          src="https://avatars.githubusercontent.com/u/49878687?s=460&u=e739e45e9f39b5200339cca6dc293f934fa03bc0&v=4"
          className="user-about__image"
        />
        <span className="user-about__username">Museop Kim</span>
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
