import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactHelmet from "../common/ReactHelmet";
import GlobalErrorHandler from "../components/Error/GlobalErrorHandler";
import Loading from "../components/Loading/Loading";
import Ranking from "../components/Ranking/Ranking";
import MainTemplate from "../components/Template/Main/MainTemplate";
import { getSongRanking } from "../modules/song";

const RankingPage = () => {
  const { data: songs, loading, error } = useSelector(state => state.song);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSongRanking());
  }, [dispatch]);

  return (
    <>
      <ReactHelmet title={"신청곡 랭킹"} />
      <MainTemplate>
        {loading && <Loading position={50} />}
        {error && <GlobalErrorHandler error={error} />}
        {songs && <Ranking songs={songs} />}
      </MainTemplate>
    </>
  );
};

export default RankingPage;
