import React from "react";
import styled from "styled-components";
import ReactHelmet from "../common/ReactHelmet";
import Song from "../components/Ranking/Song";
import MainTemplate from "../components/Template/Main/MainTemplate";

const Ranking = () => {
  return (
    <>
      <ReactHelmet title={"신청곡 랭킹"} />
      <MainTemplate>
        <RankingBlock>
          <Song />
        </RankingBlock>
      </MainTemplate>
    </>
  );
};

const RankingBlock = styled.ul``;

export default Ranking;
