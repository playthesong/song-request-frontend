import React, { useEffect } from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import ArticleNames from "./ArticleNames";
import SongSearchResultContainer from "../../../../containers/SongSearchResultContainer";
import SearchBy from "./SearchBy";

const SongSearchModal = ({ isOpened, onCloseModal }) => {
  return (
    <SongSearchModalBlock isOpened={isOpened}>
      <SearchForm onCloseModal={onCloseModal} />
      <SearchResultWrap>
        <ArticleNames />
        <SongSearchResultContainer />
      </SearchResultWrap>
      <SearchBy />
    </SongSearchModalBlock>
  );
};

const SongSearchModalBlock = styled.div`
  box-sizing: border-box;
  display: ${props => (props.isOpened ? "block" : "none")};
  width: 100%;
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 145%;
  min-height: 140%;
  max-height: 180%;
  background-color: #fbfbfd;
  box-shadow: 1px 1px 15px 1px rgba(253, 253, 253, 0.3);
  border-radius: 0.3rem;
  padding: 5rem 5rem 8rem 5rem;
  z-index: 99;
`;

const SearchResultWrap = styled.div`
  padding: 0rem 0.5rem;
`;

export default SongSearchModal;
