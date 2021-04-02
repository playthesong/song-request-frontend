import React from "react";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import ArticleNames from "./ArticleNames";
import SearchBy from "./SearchBy";
import CloseButton from "./CloseButton";
import SongSearchResult from "./SongSearchResult";

const SongSearchModal = ({ jwtToken, isOpened, onCloseModal }) => {
  return (
    <SongSearchModalBlock isOpened={isOpened}>
      <SearchForm jwtToken={jwtToken} />
      <SearchResultWrap>
        <ArticleNames />
        <SongSearchResult onCloseModal={onCloseModal} />
      </SearchResultWrap>
      <CloseButton onCloseModal={onCloseModal} />
      <SearchBy />
    </SongSearchModalBlock>
  );
};

const SongSearchModalBlock = styled.div`
  box-sizing: border-box;
  display: ${props => (props.isOpened ? "block" : "none")};
  width: 100%;
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 145%;
  min-height: 115%;
  max-height: 180%;
  background-color: #fbfbfd;
  box-shadow: 1px 1px 15px 1px rgba(253, 253, 253, 0.3);
  border-radius: 0.3rem;
  padding: 3rem 5rem 6rem 5rem;
  z-index: 99;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 3rem 1rem 5rem 1rem;
  }
`;

const SearchResultWrap = styled.div`
  margin-left: 0.1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default SongSearchModal;
