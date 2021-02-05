import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const SearchForm = ({ onCloseModal }) => {
  return (
    <Form>
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
    </Form>
  );
};

const Form = styled.form`
  box-sizing: border-box;
  width: 95%;
  display: flex;
  justify-content: center;
  margin-bottom: 3.8rem;
  margin-left: 0.2rem;
`;

const SearchLabel = styled.span`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0rem;
  left: 0rem;
  height: 2.35rem;
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
  margin: 0rem 0.5rem 0rem 5rem;
  font-size: 1.2rem;
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
      margin-left: -0.21rem;
    }

    & > ${SearchInput} {
      margin-left: 4.2rem;
    }
  }
`;

const SearchButton = styled.button`
  display: flex;
  position: relative;
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

export default SearchForm;
