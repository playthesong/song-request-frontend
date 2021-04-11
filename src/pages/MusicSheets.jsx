import React from "react";
import ReactHelmet from "../common/ReactHelmet";
import EmptyResult from "../components/EmptyResult/EmptyResult";
import MainTemplate from "../components/Template/Main/MainTemplate";

const MusicSheets = () => {
  return (
    <>
      <ReactHelmet title={"Products"} />
      <MainTemplate>
        <EmptyResult message={"아직 준비 중입니다 :)"} opacity={0.3} />
      </MainTemplate>
    </>
  );
};

export default MusicSheets;
