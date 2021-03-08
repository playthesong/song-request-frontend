import React from "react";
import { IoMdClose } from "react-icons/io";
import styled from "styled-components";
import SearchForm from "./SearchForm";
import ArticleNames from "./ArticleNames";
import SongSearchResultContainer from "../../../containers/LetterEditor/SongSearchModal/SongSearchResultContainer";
import SearchBy from "./SearchBy";
import CloseButton from "./CloseButton";

const SongSearchModal = ({ isOpened, onCloseModal }) => {
  return (
    <SongSearchModalBlock isOpened={isOpened}>
      <SearchForm onCloseModal={onCloseModal} />
      <SearchResultWrap>
        <ArticleNames />
        <SongSearchResultContainer onCloseModal={onCloseModal} />
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
`;

const SearchResultWrap = styled.div`
  margin-left: 0.1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default SongSearchModal;
