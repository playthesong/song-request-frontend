import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const LetterEditorSearchModal = ({ isOpened, onCloseModal }) => {
  return (
    <SearchModalBlock isOpened={isOpened}>
      <SearchForm>
        <SearchInputWrap>
          <SearchLabel>ARTIST</SearchLabel>
          <SearchInput />
        </SearchInputWrap>
        <SearchInputWrap>
          <SearchLabel>TITLE</SearchLabel>
          <SearchInput />
        </SearchInputWrap>
        <SearchButton type="button" onClick={onCloseModal}>
          <SearchIcon />
        </SearchButton>
      </SearchForm>
      <SearchResultWrap>
        <ArticleNames>
          <ArticleName>ALBUM</ArticleName>
          <ArticleName>TITLE</ArticleName>
          <ArticleName>SELECT</ArticleName>
        </ArticleNames>
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

const SearchForm = styled.form`
  box-sizing: border-box;
  width: 95%;
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const SearchLabel = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: -0.1rem;
  height: 2.35rem;
  font-size: 1rem;
  background-color: #727272;
  padding: 0rem 0.7rem;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
  color: white;
  font-weight: 600;
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.1);
`;

const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #e9ecef;
  padding: 0.1rem 0rem;
  background: #fbfbfd;
  height: 2.1rem;
  flex: 6;

  &:nth-child(2) {
    & > ${SearchLabel} {
      border-radius: 0.2rem;
    }
  }
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  color: #868e96;
  width: 100%;
  margin: 0rem 0.5rem 0rem 5rem;
  font-size: 1.2rem;
`;

const SearchButton = styled.button`
  display: flex;
  position: relative;
  top: -0.05rem;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #e1999c;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  flex: 1;
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled(BiSearch)`
  color: #fff;
  font-size: 1.4rem;
`;

const SearchResultWrap = styled.div`
  padding: 0rem 0.5rem;
`;

const ArticleNames = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ArticleName = styled.span`
  box-sizing: border-box;
  font-size: 1.1rem;
  font-weight: 700;
  color: #adb5bd;

  &:nth-child(1) {
    flex: 4;
  }
  &:nth-child(2) {
    flex: 5;
  }
  &:nth-child(3) {
    flex: 2;
    text-align: center;
  }
`;

export default LetterEditorSearchModal;
