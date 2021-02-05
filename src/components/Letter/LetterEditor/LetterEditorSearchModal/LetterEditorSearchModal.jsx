import React from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import ArticleNames from "./ArticleNames";

const LetterEditorSearchModal = ({ isOpened, onCloseModal }) => {
  return (
    <SearchModalBlock isOpened={isOpened}>
      <SearchForm onCloseModal={onCloseModal} />
      <SearchResultWrap>
        <ArticleNames />
      </SearchResultWrap>
    </SearchModalBlock>
  );
};

const SearchModalBlock = styled.div`
  box-sizing: border-box;
  display: ${props => (props.isOpened ? "block" : "none")};
  width: 100%;
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 125%;
  min-height: 120%;
  background-color: #fbfbfd;
  box-shadow: 1px 1px 15px 1px rgba(253, 253, 253, 0.3);
  border-radius: 0.3rem;
  padding: 5rem;
  z-index: 99;
`;

const SearchResultWrap = styled.div`
  padding: 0rem 0.5rem;
`;

export default LetterEditorSearchModal;
