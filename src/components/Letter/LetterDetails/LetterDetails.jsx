import React, { useState } from "react";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import { TiEdit, TiDeleteOutline } from "react-icons/ti";
import ModalTemplate from "../../Modal/ModalTemplate";
import Song from "./Song";
import SongStory from "./SongStory";
import User from "./User";

const LetterDetails = ({
  activatedId: isActivated,
  onCancel,
  id,
  songStory,
  song,
  account
}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <ModalTemplate isActivated={isActivated}>
      <LetterDetailsBlock>
        <MenuButton onClick={() => setOpenMenu(!openMenu)} />
        {openMenu && (
          <Menu>
            <li className="menu__item">
              <TiEdit className="menu__icon edit" />{" "}
              <span className="menu__name">수정</span>
            </li>
            <li className="menu__item">
              <TiDeleteOutline className="menu__icon delete" />{" "}
              <span className="menu__name">삭제</span>
            </li>
          </Menu>
        )}
        <Song />
        <SongStory />
        <User />
        <CloseButton onClick={() => onCancel()}>CLOSE</CloseButton>
      </LetterDetailsBlock>
    </ModalTemplate>
  );
};

const MenuButton = styled(MdMoreHoriz)`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  bottom: 93%;
  right: 3%;
  cursor: pointer;
  font-size: 2.1rem;
  color: gray;
  transition: 0.7s;
`;

const Menu = styled.ul`
  border: 1px solid rgba(0, 0, 0, 0.11);
  border-radius: 0.35rem;
  position: absolute;
  bottom: 77%;
  right: 4.5%;
  width: 5.5rem;
  box-shadow: 7px 5px 30px 3px rgba(0, 0, 0, 0.15);

  .menu__item {
    padding: 0.7rem 0.3rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
      &,
      .menu__icon,
      .menu__name {
        opacity: 1;
        background-color: #e64980;
        color: #fff;
        font-weight: 700;
      }
    }
  }

  .menu__icon {
    font-size: 1.8rem;
    opacity: 0.5;
  }

  .menu__icon.edit {
    color: #1098ad;
  }

  .menu__icon.delete {
    color: #a61e4d;
  }

  .menu__name {
    font-size: 1.25rem;
    line-height: 1.77rem;
    margin-left: 0.37rem;
    opacity: 0.7;
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
  min-height: 35vh;
  box-shadow: 0px 3px 15px 1px rgba(0, 0, 0, 0.5);
  background-color: #fbfbfd;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 4.5rem 4.5rem 6rem 4.5rem;

  &:hover {
    & ${MenuButton} {
      visibility: visible;
      opacity: 1;
    }
    ${CloseButton} {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export default LetterDetails;
