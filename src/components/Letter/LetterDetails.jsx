import React from "react";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import ModalTemplate from "../Modal/ModalTemplate";

const LetterDetails = ({
  activatedId: isActivated,
  id,
  songStory,
  song,
  account
}) => {
  return (
    <ModalTemplate isActivated={isActivated}>
      <LetterDetailsBlock>
        <HiddenMenu>
          <MenuButton />
        </HiddenMenu>
        <Song>
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
        </Song>
        <SongStory>
          <p className="story">사연 입니다.</p>
          <span className="created-time">2021-01-31 15:19</span>
        </SongStory>
        <User>
          <img
            src="https://avatars.githubusercontent.com/u/49878687?s=460&u=e739e45e9f39b5200339cca6dc293f934fa03bc0&v=4"
            className="user-image"
          />
          <span className="username">Museop Kim</span>
        </User>
        <CloseButton>닫기</CloseButton>
      </LetterDetailsBlock>
    </ModalTemplate>
  );
};

const MenuButton = styled(MdMoreHoriz)``;

const HiddenMenu = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 92%;
  left: 90%;
  cursor: pointer;

  ${MenuButton} {
    font-size: 2.1rem;
    color: gray;
    opacity: 0;
    transition: 0.7s;
  }
`;

const CloseButton = styled.button`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 3.3rem;
  bottom: 0;
  left: 0;
  color: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  background-color: #f06595;
  border: none;
  cursor: pointer;
  transition: 0.7s;
  outline: none;
`;

const LetterDetailsBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38rem;
  min-height: 50vh;
  box-shadow: 0px 3px 15px 1px rgba(0, 0, 0, 0.5);
  background-color: #fbfbfd;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 4.5rem 4.5rem 6rem 4.5rem;

  &:hover {
    ${HiddenMenu} {
      visibility: visible;

      & ${MenuButton} {
        opacity: 1;
      }
    }
    ${CloseButton} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const Song = styled.div`
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

const SongStory = styled.div`
  margin: 2rem 0.7rem;
  min-height: 5rem;
  max-height: 9rem;
  overflow-y: auto;

  .story {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }

  .created-time {
    display: inline-block;
    width: 100%;
    margin-top: 2.5rem;
    text-align: right;
    font-weight: 500;
    font-size: 1.2rem;
    opacity: 0.5;
  }
`;

const User = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1.5rem;

  .user-image {
    width: 4.2rem;
    height: 4.2rem;
    border-radius: 50%;
    box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.5);
  }

  .username {
    margin-left: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

export default LetterDetails;
