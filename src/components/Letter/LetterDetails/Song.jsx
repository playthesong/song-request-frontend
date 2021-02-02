import React from "react";
import styled, { css } from "styled-components";

const Song = ({ song, form, onChange, isEdit }) => {
  const { title, artist, imageUrl } = song;
  console.log(form);
  return (
    <SongBlock>
      {isEdit && <input type="hidden" name="imageUrl" value={imageUrl} />}
      <img src={imageUrl} className="song-image" />
      <div className="song-about">
        <div className="song-about__column">
          <div className="song-about__column-name">TITLE</div>
          {isEdit ? (
            <input
              type="text"
              className="song-about__title-input"
              maxLength="30"
              placeholder="노래 제목을 입력 해주세요."
              name="title"
              onChange={onChange}
              value={form[title]}
              defaultValue={title}
              required
            />
          ) : (
            <span className="song-about__title">{title}</span>
          )}
        </div>
        <div className="song-about__column">
          <div className="song-about__column-name">ARTIST</div>
          {isEdit ? (
            <input
              type="text"
              className="song-about__artist-input"
              maxLength="15"
              placeholder="가수 이름을 입력 해주세요."
              name="artist"
              onChange={onChange}
              value={form[artist]}
              defaultValue={artist}
              required
            />
          ) : (
            <span className="song-about__artist">{artist}</span>
          )}
        </div>
      </div>
    </SongBlock>
  );
};

const TitleCommonStyles = css`
  font-size: 1.2rem;
  font-weight: 500;
  height: 1.445rem;
  padding: 0.38rem 0rem 0.3rem 0.1rem;
`;

const ArtistCommonStyles = css`
  opacity: 0.8;
  font-size: 1.2rem;
  height: 1.445rem;
  padding: 0.38rem 0.1rem 0.3rem 0.1rem;
`;

const InputCommonStyles = css`
  /* box-sizing: border-box; */
  border: none;
  outline: none;
  font-size: 1.2rem;
  color: #27273e;
  opacity: 0.8;
  padding: 0.2rem 0.09rem 0.37rem 0.1rem;
  background-color: #fbfbfd;
  border-bottom: 1.5px solid rgba(0, 0, 0, 0.2);
  transition: 0.3s;

  &:focus {
    &::placeholder {
      opacity: 0;
    }

    border-bottom: 1.5px solid rgba(230, 73, 128, 0.7);
  }

  &::placeholder {
    font-size: 1.2rem;
    opacity: 0.7;
  }
`;

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

  .song-about__title-input {
    ${InputCommonStyles}
  }

  .song-about__artist-input {
    ${InputCommonStyles}
  }

  .song-about__title {
    ${TitleCommonStyles}
  }

  .song-about__artist {
    ${ArtistCommonStyles}
  }
`;

export default Song;
