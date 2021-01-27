import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationBlock>
      <Link to="/">신청곡</Link>
      <Link to="/ranking">신청곡 순위</Link>
      <Link to="/youtube-contents">유튜브 영상</Link>
      <Link to="/music-sheets">리얼피아노 악보집</Link>
    </NavigationBlock>
  );
};

const NavigationBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  & > * {
    /* padding: 25px 5px 10px 5px; */
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0px 30px;
    padding-top: 10px;
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    align-self: center;
    color: inherit;
    opacity: 0.5;
    height: 100%;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0); */
    border-bottom: 3px solid rgba(250, 162, 193, 0);
    transition: 0.3s;

    :hover {
      opacity: 1;
      /* color: #faa2c1; */
      border-bottom: 3px solid rgba(250, 162, 193, 1);
    }
  }
`;

export default Navigation;
