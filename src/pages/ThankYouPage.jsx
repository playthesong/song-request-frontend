import React from "react";
import MainTemplate from "../components/Template/Main/MainTemplate";
import realpianoLogo from "../assets/realpiano_logo_alt.png";
import styled from "styled-components";

const ThankYouPage = () => {
  return (
    <MainTemplate>
      <ThankYouPageBlock>
        <Logo src={realpianoLogo} />
        <Message>그동안 리얼피아노 신청곡을 이용 해주셔서 감사합니다.</Message>
        <Message>다시 만나뵙게 될 수 있길 기대합니다 :)</Message>
      </ThankYouPageBlock>
    </MainTemplate>
  );
};

const ThankYouPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

const Logo = styled.img`
  max-width: 17rem;
  max-height: 17rem;
  opacity: 0.5;
`;

const Message = styled.p`
  margin: 1rem 0rem;
  font-size: 1.35rem;
  color: rgba(0, 0, 0, 0.5);
`;

export default ThankYouPage;
