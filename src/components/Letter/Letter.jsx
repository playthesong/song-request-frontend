import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";
import realpianoLogo from "../../assets/realpiano_logo_alt.png";
import { useDispatch, useSelector } from "react-redux";
import { changeModalType, openModal } from "../../modules/letterModal";
import { getLetterById } from "../../modules/letter";
import { LETTER_MODAL } from "../../constants/types";
import GlobalErrorHandler from "../../components/Error/GlobalErrorHandler";
import AdminHiddenButtons from "./AdminHiddenMenu";
import useMouseEnter from "../../hooks/useMouseEnter";

const TITLE_MAX_LENGTH = 30;
const ARTIST_MAX_LENGTH = 10;
const SONG_STORY_MAX_LENGTH = 100;

const Letter = ({
  id,
  jwtToken,
  currentUser,
  user,
  song,
  songStory,
  createdDateTime,
  onUpdateLetters
}) => {
  const [isMouseEnter, onMouseEnter, onMouseLeave] = useMouseEnter();
  const { error } = useSelector(state => state.letter);
  const dispatch = useDispatch();
  const onReadLetter = letterId => {
    dispatch(openModal());
    dispatch(changeModalType(LETTER_MODAL.READ));
    dispatch(getLetterById(letterId));
  };

  if (error) {
    return <GlobalErrorHandler error={error} />;
  }

  const { name, avatarUrl } = user;
  const { title, artist, imageUrl } = song;

  return (
    <>
      <LetterBlock
        onClick={() => onReadLetter(id)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <AdminHiddenButtons
          letterId={id}
          jwtToken={jwtToken}
          currentUser={currentUser}
          isMouseEnter={isMouseEnter}
          onUpdateLetters={onUpdateLetters}
        />
        <SongBlock>
          <img
            src={imageUrl ? imageUrl : realpianoLogo}
            alt="ALBUM COVER"
            className="album-image"
          />
          <div className="song-about">
            <span className="song-about__title">
              {parse(
                title.length > TITLE_MAX_LENGTH
                  ? `${title.slice(0, TITLE_MAX_LENGTH)} ...`
                  : title
              )}
            </span>
            <span className="song-about__artist">
              {parse(
                artist.length > ARTIST_MAX_LENGTH
                  ? `${artist.slice(0, ARTIST_MAX_LENGTH)} ...`
                  : artist
              )}
            </span>
          </div>
        </SongBlock>
        <SongStory>
          {songStory.length > SONG_STORY_MAX_LENGTH
            ? `${songStory.slice(0, SONG_STORY_MAX_LENGTH)} ...`
            : songStory}
        </SongStory>
        <UserBlock>
          <div className="created-time">{createdDateTime}</div>
          <div className="user-about">
            <img
              src={avatarUrl}
              alt="USER PROFILE"
              className="user-about__avatar"
            />
            <span className="user-about__name">{name}</span>
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
  position: relative;
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
    width: 10rem;
    height: 10rem;
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin: 1.2rem 0rem 4.1rem 0rem;
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
    margin-left: 1.5rem;

    .song-about__title {
      max-width: 17rem;
      font-size: 1.37rem;
      font-weight: 600;
      color: #232323;
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
  width: 100%;
  max-width: 24.2rem;
  max-height: 8rem;
  line-break: anywhere;
  margin-top: -0.3rem;
  font-size: 1.2rem;
  line-height: 1.9rem;
  opacity: 0.9;
  padding: 0rem 0.35rem;
`;

const UserBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto 5px 3px 5px;

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
    box-shadow: 3px 2px 10px 1px rgba(0, 0, 0, 0.3);
  }

  .user-about__name {
    font-size: 1.1rem;
    margin-top: 0.2rem;
    margin-left: 0.5rem;
    opacity: 0.8;
    font-weight: 700;
  }
`;

export default Letter;
