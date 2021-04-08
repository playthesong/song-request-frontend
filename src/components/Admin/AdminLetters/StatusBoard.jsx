import React from "react";
import styled from "styled-components";

const LETTER_START_MESSAGE = "신청곡을 접수 중입니다 :)";
const LETTER_STOP_MESSAGE = "신청곡 접수가 중지 되었습니다.";

const StatusBoard = ({ readyToLetter }) => {
  return (
    <StatusBoardBlock>
      {readyToLetter ? LETTER_START_MESSAGE : LETTER_STOP_MESSAGE}
    </StatusBoardBlock>
  );
};

const StatusBoardBlock = styled.div`
  margin-top: 3rem;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.35);
`;

export default StatusBoard;
