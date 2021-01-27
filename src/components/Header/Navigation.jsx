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

const NavigationBlock = styled.ul``;

export default Navigation;
