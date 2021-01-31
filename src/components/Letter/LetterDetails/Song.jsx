import React from "react";
import styled from "styled-components";

const Song = () => {
  return (
    <SongBlock>
      <img
        src="http://i.maniadb.com/images/album/742/742576_1_f.jpg"
        className="song-image"
      />
      <div className="song-about">
        <div className="song-about__column">
          <div className="song-about__column-name">TITLE</div>
          <span className="song-about__title">밤편지</span>
        </div>
        <div className="song-about__column">
          <div className="song-about__column-name">ARTIST</div>
          <span className="song-about__artist">아이유</span>
        </div>
      </div>
    </SongBlock>
  );
};

const SongBlock = styled.div`
  display: flex;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);

  .song-image {
    width: 14rem;
    height: 14rem;
    border-radius: 0.5rem;
  }

  .song-about {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-left: 2rem;
    margin-bottom: 0.2rem;
  }

  .song-about__column {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
  }

  .song-about__column-name {
    display: inline-block;
    opacity: 0.7;
    font-weight: 800;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #d6336c;
  }

  .song-about__title {
    font-size: 1.3rem;
    font-weight: 500;
  }

  .song-about__artist {
    opacity: 0.8;
    font-size: 1.2rem;
  }
`;

export default Song;
