import React from "react";
import styled from "styled-components";
import alt from "../../assets/empty.png";

const EmptyResult = ({ message, opacity }) => {
  return (
    <EmptyResultBlock>
      <Logo src={alt} opacity={opacity} />
      <Message>{message}</Message>
    </EmptyResultBlock>
  );
};

const EmptyResultBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: -9;

  @media ${({ theme }) => theme.device.mobile} {
    top: 55%;
  }
`;

const Logo = styled.img`
  max-width: 4.1rem;
  max-height: 4.1rem;
  opacity: ${props => props.opacity};

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 3.7rem;
    max-height: 3.7rem;
  }
`;

const Message = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  color: #232323;
  opacity: 0.5;
  line-height: 2.1rem;
  margin-top: 1.5rem;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.1rem;
    width: 85%;
    line-height: 1.5rem;
  }
`;

export default EmptyResult;
