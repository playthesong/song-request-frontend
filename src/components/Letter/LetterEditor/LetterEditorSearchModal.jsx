import React from "react";
import styled from "styled-components";
import ModalTemplate from "../../Modal/ModalTemplate";

const LetterEditorSearchModal = ({ isOpened, onCloseModal }) => {
  return (
    <SearchModalBlock isOpened={isOpened}>
      Search Modal
      <SearchModalButton type="button" onClick={onCloseModal}>
        버튼
      </SearchModalButton>
    </SearchModalBlock>
  );
};

const SearchModalBlock = styled.div`
  display: ${props => (props.isOpened ? "block" : "none")};
  width: 100%;
  position: absolute;
  top: -15%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  min-height: 120%;
  background-color: #000;
  z-index: 99;
`;

const SearchModalButton = styled.button``;

export default LetterEditorSearchModal;
