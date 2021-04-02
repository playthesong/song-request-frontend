import React from "react";
import styled, { css } from "styled-components";
import { FiCheck } from "react-icons/fi";
import { BiGitCompare } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const HiddenButtons = () => {
  return (
    <HiddenButtonsBlock>
      <CheckIcon />
      <PendingIcon />
      <DeleteIcon />
    </HiddenButtonsBlock>
  );
};

const HiddenButtonsBlock = styled.div`
  border: none;
  display: flex;
  flex-direction: column;
  margin-right: 0.35rem;
  margin-top: 0.7rem;
  z-index: 9;
`;

const IconCommonStyles = css`
  margin: 0.65rem 0rem;
  border-radius: 50%;
  color: #fff;
  box-shadow: 7px 3px 16px 3px rgba(50, 50, 50, 0.2);
  opacity: 0.5;
  transition: 0.2s;

  &:hover {
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

const DeleteIcon = styled(AiFillDelete)`
  margin: 0rem 0.3rem;
  margin-top: -0.1rem;
  padding: 0.42rem 0.42rem;
  font-size: 1.5rem;
  background-color: #c2255c;
  ${IconCommonStyles}
`;

export default HiddenButtons;
