import React from "react";
import styled from "styled-components";

const User = () => {
  return (
    <UserBlock>
      <img
        src="https://avatars.githubusercontent.com/u/49878687?s=460&u=e739e45e9f39b5200339cca6dc293f934fa03bc0&v=4"
        className="user-image"
      />
      <span className="username">Museop Kim</span>
    </UserBlock>
  );
};

const UserBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.5rem;

  .user-image {
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.5);
  }

  .username {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export default User;
