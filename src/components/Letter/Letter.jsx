import React from "react";
import styled from "styled-components";

const Letter = ({ user, song, songStory, createdDateTime, requestStatus }) => {
  const { name, avatarUrl } = user;
  const { title, artist, imageUrl } = song;

  return (
    <LetterBlock>
      <SongBlock>
        <img src={imageUrl} alt="ALBUM IMAGE" className="album-image" />
        <div className="song-about">
          <span className="song-about__title">{title}</span>
          <span className="song-about__artist">{artist}</span>
        </div>
      </SongBlock>
      <SongStoryBlock>{songStory}</SongStoryBlock>
      <UserBlock>
        <div className="created-time">{createdDateTime}</div>
        <div className="user-about">
          <img src={avatarUrl} className="user-about__avatar" />
          <span className="user-about__name">{name}</span>
        </div>
      </UserBlock>
    </LetterBlock>
  );
};

const LetterBlock = styled.li``;

const SongBlock = styled.div``;

const SongStoryBlock = styled.p``;

const UserBlock = styled.div``;

export default Letter;
