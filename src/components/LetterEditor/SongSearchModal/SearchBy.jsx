import React from "react";
import styled from "styled-components";

const SearchBy = () => {
  return (
    <SearchByBlock href="http://www.maniadb.com/" target="_blank">
      <APINameWrap>
        <Prefix>Search By </Prefix>
        <APIName>ManiaDB</APIName>
      </APINameWrap>
    </SearchByBlock>
  );
};

const SearchByBlock = styled.a`
  position: absolute;
  bottom: 8%;
  right: 15%;
  display: flex;
  flex-direction: column;
  opacity: 0.7;
`;

const APINameWrap = styled.div`
  margin-left: auto;
`;

const Prefix = styled.span`
  font-size: 0.3rem;
  color: #adb5bd;
`;

const APIName = styled.span`
  font-size: 1rem;
  color: #adb5bd;
  font-weight: 500;
`;

export default SearchBy;
