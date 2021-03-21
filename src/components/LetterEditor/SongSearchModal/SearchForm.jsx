import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { searchSong } from "../../../modules/song";

const SearchForm = () => {
  const dispatch = useDispatch();

  const onSearchSong = event => {
    event.preventDefault();
    dispatch(searchSong());
  };

  return (
    <Form>
      <SearchInputWrap>
        <SearchLabel>아티스트</SearchLabel>
        <SearchInput
          type="text"
          name="artist"
          maxLength="25"
          placeholder="검색할 아티스트를 입력 해주세요."
        />
      </SearchInputWrap>
      <SearchInputWrap>
        <SearchLabel>제목</SearchLabel>
        <SearchInput
          type="text"
          name="title"
          maxLength="25"
          placeholder="검색할 제목을 입력 해주세요."
        />
      </SearchInputWrap>
      <SearchButton type="submit" onClick={onSearchSong}>
        <SearchIcon />
      </SearchButton>
    </Form>
  );
};

const Form = styled.form`
  box-sizing: border-box;
  width: 98%;
  display: flex;
  justify-content: center;
  margin: 0rem auto 2rem auto;

  @media ${({ theme }) => theme.device.mobile} {
    width: 98%;
  }
`;

const SearchLabel = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0rem;
  left: 0rem;
  height: 2.37rem;
  font-size: 1rem;
  background-color: #727272;
  padding: 0rem 0.7rem;
  border-radius: 0.3rem 0rem 0rem 0.3rem;
  color: white;
  font-weight: 600;
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  color: #868e96;
  width: 100%;
  margin: 0rem 0.5rem 0rem 5.5rem;
  font-size: 1.2rem;
  background-color: #fbfbfd;

  &::placeholder {
    font-size: 1rem;
    opacity: 0.3;
  }

  &:focus {
    &::placeholder {
      opacity: 0;
    }
  }

  @media ${({ theme }) => theme.device.mobile} {
    &::placeholder {
      opacity: 0;
    }
  }
`;

const SearchInputWrap = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: 1px solid #e9ecef;
  border-radius: 1rem 0rem 0rem 1rem;
  padding: 0.1rem 0rem;
  background: #fbfbfd;
  height: 2.1rem;
  flex: 11;

  &:nth-child(2) {
    & > ${SearchLabel} {
      border-radius: 0.2rem;
      margin-left: -0.25rem;
    }

    & > ${SearchInput} {
      margin-left: 3.8rem;
    }
  }
`;

const SearchButton = styled.button`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #e1999c;
  border-radius: 0rem 0.5rem 0.5rem 0rem;
  flex: 1;
  box-shadow: 1px 0px 3px 1px rgba(0, 0, 0, 0.1);
`;

const SearchIcon = styled(BiSearch)`
  color: #fff;
  font-size: 1.4rem;
`;

export default SearchForm;
