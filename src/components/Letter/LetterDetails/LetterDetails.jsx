import React from "react";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import ModalTemplate from "../../Modal/ModalTemplate";
import Song from "./Song";
import SongStory from "./SongStory";
import User from "./User";

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
        <Song />
        <SongStory />
        <User />
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

export default LetterDetails;
