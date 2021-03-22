import React from "react";
import styled from "styled-components";
import realpianoLogo from "../../assets/realpiano_logo_alt.png";

const EMPTY_LIST_MESSAGE = "리얼피아노는 여러분의 신청곡과 사연을 기다립니다.";

const EmptyList = () => {
  return (
    <EmptyListBlock>
      <Logo src={realpianoLogo} />
      <Message>{EMPTY_LIST_MESSAGE}</Message>
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
  opacity: 0.7;

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 11rem;
  }
`;

export default EmptyList;
