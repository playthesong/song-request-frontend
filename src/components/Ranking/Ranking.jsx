import React from "react";
import styled from "styled-components";
import Song from "./Song";

const Ranking = ({ songs }) => {
  return (
    <RankingBlock>
      {songs.map((song, index) => (
        <Song key={song.id} song={song} ranking={index + 1} />
      ))}
    </RankingBlock>
  );
};

const RankingBlock = styled.ul``;

export default Ranking;
