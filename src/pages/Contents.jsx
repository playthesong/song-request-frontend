import React from "react";
import MainTemplate from "../components/Template/Main/MainTemplate";
import EmptyResult from "../components/EmptyResult/EmptyResult";

const Contents = () => {
  return (
    <MainTemplate>
      <EmptyResult
        message={"아직 준비 중입니다 :) 조금만 기다려주세요!"}
        opacity={0.3}
      />
    </MainTemplate>
  );
};

export default Contents;
