import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import SongSearchResultItem from "./SongSearchResultItem";
import { updateForm } from "../../../modules/letterForm";
import Loading from "../../Loading/Loading";
import EmptyResult from "../../EmptyResult/EmptyResult";
import GlobalErrorHandler from "../../Error/GlobalErrorHandler";

const SongSearchResult = ({ onCloseModal, clearSong }) => {
  const { data: songs, loading, error } = useSelector(state => state.song);
  const dispatch = useDispatch();

  const mapSongToForm = song => {
    for (const property in song) {
      dispatch(updateForm(property, song[property]));
    }
    clearSong();
  };

  return (
    <SongSearchResultList>
      {loading && <Loading position={50} />}
      {error && <GlobalErrorHandler error={error} />}
      {songs && songs.length === 0 && (
        <EmptyResult message={"검색 결과가 존재하지 않습니다!"} opacity={0.3} />
      )}
      {songs &&
        songs.map((song, index) => (
          <SongSearchResultItem
            key={index}
            song={song}
            mapSongToForm={mapSongToForm}
            onCloseModal={onCloseModal}
          />
        ))}
      {!songs && !loading && !error && (
        <EmptyResult
          message={`신청하고 싶은 곡을 검색 해주세요! 아티스트, 제목을 모두 입력 해주셔야 합니다 :)`}
          opacity={0.3}
        />
      )}
    </SongSearchResultList>
  );
};

const SongSearchResultList = styled.ul`
  margin-top: 1.2rem;
  height: 50vh;
  overflow-y: scroll;
`;

export default SongSearchResult;
