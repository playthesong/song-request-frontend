import React from "react";
import styled from "styled-components";
import { TiEdit, TiDeleteOutline } from "react-icons/ti";

const LetterDetailsHiddenMenuButton = ({ changeToEdit, openDeleteModal }) => {
  return (
    <>
      <Menu>
        <li className="menu__item" onClick={changeToEdit}>
          <TiEdit className="menu__icon edit" />{" "}
          <span className="menu__name">수정</span>
        </li>
        <li className="menu__item" onClick={openDeleteModal}>
          <TiDeleteOutline className="menu__icon delete" />{" "}
          <span className="menu__name">삭제</span>
        </li>
      </Menu>
    </>
  );
};

const Menu = styled.ul`
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.35rem;
  position: absolute;
  top: 7%;
  right: 4.9%;
  width: 6.5rem;
  box-shadow: 7px 3px 30px 1px rgba(3, 3, 3, 0.1);
  z-index: 9;

  .menu__item {
    padding: 0.9rem 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fbfbfd;

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

  @media ${({ theme }) => theme.device.mobile} {
    width: 7.1rem;
    top: 8%;
    .menu__item {
      display: flex;
      justify-content: center;
      padding: 1rem 0rem;
    }

    .menu__icon {
      font-size: 2.1rem;
    }

    .menu__name {
      font-size: 1.4rem;
    }
  }
`;

export default LetterDetailsHiddenMenuButton;
