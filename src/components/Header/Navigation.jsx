import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <NavigationBlock>
      <NavigationItem to="/">신청곡</NavigationItem>
      <NavigationItem to="/ranking">신청곡 순위</NavigationItem>
      <NavigationItem to="/contents">신청곡 연주</NavigationItem>
      <NavigationItem to="/musicsheets">리얼피아노 악보집</NavigationItem>
    </NavigationBlock>
  );
};

const NavigationBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media ${({ theme }) => theme.device.mobile} {
    order: 3;
    width: 100%;
    justify-content: space-between;
  }
`;

const NavigationItem = styled(Link)`
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
  border-bottom: 3px solid rgba(250, 162, 193, 0);
  transition: 0.3s;

  :hover {
    opacity: 1;
    border-bottom: 3px solid rgba(250, 162, 193, 1);
  }

  @media ${({ theme }) => theme.device.mobile} {
    margin: 2.5rem 0rem 0rem 0rem;
    padding-bottom: 2rem;
    font-size: 1.1rem;

    &:first-child {
      margin-left: 3rem;
    }

    &:last-child {
      margin-right: 3rem;
    }
  }
`;

export default Navigation;
