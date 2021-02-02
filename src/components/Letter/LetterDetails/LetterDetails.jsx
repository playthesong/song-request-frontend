import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MdMoreHoriz } from "react-icons/md";
import { TiEdit, TiDeleteOutline } from "react-icons/ti";
import ModalTemplate from "../../Modal/ModalTemplate";
import Contents from "./Contents";

const LetterDetails = ({ letter, isOpened, onCloseModal }) => {
  const { id, song, songStory, createdDateTime, user } = letter;
  const [openMenu, setOpenMenu] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const changeToEdit = () => {
    setIsEdit(true);
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    setOpenMenu(false);
    setIsEdit(false);
  }, [setOpenMenu, setIsEdit]);

  return (
    <ModalTemplate isOpened={isOpened}>
      <LetterDetailsBlock>
        <MenuButton onClick={() => setOpenMenu(!openMenu)} />
        {openMenu && (
          <Menu>
            <li className="menu__item">
              <TiEdit className="menu__icon edit" />{" "}
              <span className="menu__name" onClick={changeToEdit}>
                수정
              </span>
            </li>
            <li className="menu__item">
              <TiDeleteOutline className="menu__icon delete" />{" "}
              <span className="menu__name">삭제</span>
            </li>
          </Menu>
        )}
        <Contents
          id={id}
          song={song}
          songStory={songStory}
          createdDateTime={createdDateTime}
          user={user}
          onCloseModal={onCloseModal}
          isEdit={isEdit}
        />
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
  bottom: 78.7%;
  right: 4.9%;
  width: 5.5rem;
  box-shadow: 7px 3px 30px 1px rgba(3, 3, 3, 0.1);

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

const LetterDetailsBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38rem;
  min-height: 35vh;
  box-shadow: 3px -3px 5px 1px rgba(253, 253, 253, 0.03);
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
  }
`;

export default LetterDetails;
