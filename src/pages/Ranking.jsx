import React from "react";
import ReactHelmet from "../common/ReactHelmet";
import EmptyResult from "../components/EmptyResult/EmptyResult";
import MainTemplate from "../components/Template/Main/MainTemplate";

const Ranking = () => {
  return (
    <>
      <ReactHelmet title={"신청곡 랭킹"} />
      <MainTemplate>
        <EmptyResult
          message={"아직 준비 중입니다 :) 조금만 기다려주세요!"}
          opacity={0.3}
        />
      </MainTemplate>
    </>
  );
};

export default Ranking;
