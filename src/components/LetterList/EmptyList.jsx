import React from "react";
import styled from "styled-components";
import realpianoLogo from "../../assets/realpiano_logo_alt.png";

const EmptyList = ({ message, opacity }) => {
  return (
    <EmptyListBlock>
      <Logo src={realpianoLogo} opacity={opacity} />
      <Message>{message}</Message>
    </EmptyListBlock>
  );
};

const EmptyListBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    top: 57%;
  }
`;

const Message = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: #232323;
  opacity: 0.5;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.1rem;
    width: 77%;
    line-height: 1.5rem;
  }
`;

const Logo = styled.img`
  max-width: 15rem;
  opacity: ${props => props.opacity};

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 11rem;
  }
`;

export default EmptyList;
