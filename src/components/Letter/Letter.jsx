import React from "react";
import styled from "styled-components";

const Letter = ({
  id,
  user,
  song,
  songStory,
  createdDateTime,
  onOpenModal
}) => {
  const { username, avatarUrl } = user;
  const { title, artist, imageUrl } = song;

  return (
    <>
      <LetterBlock onClick={() => onOpenModal(id)}>
        <SongBlock>
          <img src={imageUrl} alt="ALBUM IMAGE" className="album-image" />
          <div className="song-about">
            <span className="song-about__title">{title}</span>
            <span className="song-about__artist">{artist}</span>
          </div>
        </SongBlock>
        <SongStory>{songStory}</SongStory>
        <UserBlock>
          <div className="created-time">{createdDateTime}</div>
          <div className="user-about">
            <img src={avatarUrl} className="user-about__avatar" />
            <span className="user-about__name">{username}</span>
          </div>
        </UserBlock>
      </LetterBlock>
    </>
  );
};

const LetterBlock = styled.li`
  width: 25rem;
  height: 23rem;
  margin: 1.2rem;
  margin-bottom: 5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.7rem;
  border: #ffdeeb;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.2),
    0 8px 16px -8px rgba(0, 0, 0, 0.2), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);

  &:hover {
    box-shadow: 0px 25px 30px 3px rgba(0, 0, 0, 0.3);
  }

  .album-image {
    /* max-width: 11rem; */
    /* max-height: 11rem; */
    width: 10rem;
    height: 10rem;
  }
`;

const SongBlock = styled.div`
  display: flex;
  justify-content: space-between;

  .album-image {
    position: relative;
    top: -2.5rem;
    box-shadow: 3px 2px 5px 1px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  .song-about {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: auto;
    margin-left: 2rem;

    .song-about__title {
      overflow-x: hidden;
      font-size: 1.4rem;
      font-weight: 500;
      color: #2c2c2c;
      opacity: 0.9;
    }

    .song-about__artist {
      margin-top: 0.5rem;
      font-size: 1.2rem;
      opacity: 0.8;
    }
  }
`;

const SongStory = styled.p`
  height: 100%;
  font-size: 1.2rem;
  line-height: 1.5rem;
  opacity: 0.9;
  padding: 0 5px;
`;

const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 5px 3px 5px;

  .created-time {
    font-size: 1.1rem;
    margin-top: 0.8rem;
    opacity: 0.7;
  }

  .user-about {
    display: flex;
    align-items: center;
  }

  .user-about__avatar {
    max-width: 2.5rem;
    max-height: 2.5rem;
    border-radius: 50%;
  }

  .user-about__name {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    margin-left: 0.5rem;
    opacity: 0.8;
  }
`;

export default Letter;
