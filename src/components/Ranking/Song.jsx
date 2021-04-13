import React from "react";
import styled from "styled-components";
import { IoIosHeart } from "react-icons/io";

const Song = () => {
  return (
    <SongBlock>
      <Ranking></Ranking>
      <SongDetailsWrap>
        <AlbumImage />
        <SongDetails>
          <Title></Title>
          <Artist></Artist>
        </SongDetails>
        <RequestCountWrap>
          <LikeIcon />
          <RequestCount></RequestCount>
        </RequestCountWrap>
      </SongDetailsWrap>
    </SongBlock>
  );
};

const SongBlock = styled.li``;

const Ranking = styled.span``;

const SongDetailsWrap = styled.div``;

const AlbumImage = styled.img``;

const SongDetails = styled.div``;

const Title = styled.span``;

const Artist = styled.span``;

const RequestCountWrap = styled.div``;

const LikeIcon = styled(IoIosHeart)``;

const RequestCount = styled.span``;

export default Song;
