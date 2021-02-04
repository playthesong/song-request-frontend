import React from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";

const LetterEditorSearchButton = () => {
  return (
    <StyledButton>
      <SearchIcon />
      신청곡 검색
    </StyledButton>
  );
};

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 11rem;
  top: 14%;
  right: 15%;

  padding: 0.35rem 0rem;
  border-style: none;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  background-color: #f06595;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.15);
  color: #fff;
  font-weight: 500;
  z-index: 1;
  cursor: pointer;
`;

const SearchIcon = styled(BiSearch)`
  font-size: 1.35rem;
  margin-right: 0.35rem;
  opacity: 0.9;
`;

export default LetterEditorSearchButton;
