import React from "react";
import styled, { css } from "styled-components";
import { FiCheck } from "react-icons/fi";
import { BiGitCompare } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import { LETTER_STATUS } from "../../constants/letterStatus";

const HiddenButtons = ({
  letterId,
  jwtToken,
  openMenu,
  onOpenDeleteModal,
  onChangeStatus
}) => {
  return (
    <>
      <HiddenButtonsBlock openMenu={openMenu}>
        <CheckIcon
          onClick={event => onChangeStatus(event, LETTER_STATUS.DONE)}
        />
        <PendingIcon
          onClick={event => onChangeStatus(event, LETTER_STATUS.PENDING)}
        />
        <DeleteIcon onClick={onOpenDeleteModal} />
      </HiddenButtonsBlock>
    </>
  );
};

const HiddenButtonsBlock = styled.div`
  border: none;
  position: relative;
  flex-direction: column;
  margin-top: 2.1rem;
  margin-left: 0.25rem;
  z-index: 9;
  ${props =>
    props.openMenu
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}
`;

const IconCommonStyles = css`
  margin: 0.65rem 0rem;
  margin-right: 1rem;
  border-radius: 50%;
  color: #fff;
  box-shadow: 7px 3px 16px 3px rgba(50, 50, 50, 0.2);
  opacity: 0.5;
  transition: 0.2s;

  &:hover {
    padding: 0.6rem 0.6rem;
    opacity: 1;
  }
`;

const CheckIcon = styled(FiCheck)`
  padding: 0.3rem 0.4rem;
  font-size: 1.6rem;
  background-color: #63e6be;
  ${IconCommonStyles}
`;

const PendingIcon = styled(BiGitCompare)`
  padding: 0.43rem 0.45rem;
  font-size: 1.5rem;
  background-color: #ff922b;
  ${IconCommonStyles}
`;

const DeleteIcon = styled(AiTwotoneDelete)`
  margin: 0rem 0.3rem;
  margin-bottom: 3rem;
  padding: 0.43rem 0.42rem;
  font-size: 1.5rem;
  background-color: #c2255c;
  ${IconCommonStyles}
`;

export default HiddenButtons;
