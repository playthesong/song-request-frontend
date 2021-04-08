import React from "react";
import styled from "styled-components";

const StopNotice = () => {
  return (
    <StopNoticeBlock>
      <StopIcon></StopIcon>
      <StopComment>신청곡 접수 중단</StopComment>
    </StopNoticeBlock>
  );
};

const StopNoticeBlock = styled.div`
  display: flex;
  align-items: center;
`;

const StopIcon = styled.div`
  width: 1.1rem;
  height: 1.1rem;
  box-shadow: 5px 10px 15px 3px rgba(155, 155, 155, 0.7);
  border-radius: 50%;

  background: #fa5252;
  opacity: 0.8;
`;

const StopComment = styled.p`
  font-size: 1.25rem;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 0.35rem;
  margin-left: 0.6rem;
`;

export default StopNotice;
