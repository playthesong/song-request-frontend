import React from "react";
import { FcImport } from "react-icons/fc";
import styled from "styled-components";

const GlobalError = ({ errorMessage }) => {
  const messages = errorMessage.split(".");

  return (
    <GlobalErrorBlock>
      <ErrorIcon />
      <ErrorMessage>{`${messages[0]}.`}</ErrorMessage>
      <ErrorMessage>{`${messages[1]}.`}</ErrorMessage>
      <MoveButton href="/">돌아가기</MoveButton>
    </GlobalErrorBlock>
  );
};

const GlobalErrorBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorIcon = styled(FcImport)`
  font-size: 4.1rem;
  margin-bottom: 2.1rem;
`;

const ErrorMessage = styled.p`
  text-align: center;
  width: 100%;
  line-height: 2rem;
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.5);
`;

const MoveButton = styled.a`
  margin-top: 2.1rem;
  background: #ffc078;
  padding: 0.7rem 1.5rem;
  border-radius: 0.3rem;
  color: #fff;
  font-size: 1.2rem;
  line-height: 1.2rem;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.8;
  }
`;

export default GlobalError;
