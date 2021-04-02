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
  justify-content: space-between;
  z-index: 9;
`;

const IconCommonStyles = css`
  border-radius: 50%;
  color: #fff;
  box-shadow: 7px 3px 16px 3px rgba(50, 50, 50, 0.2);
  opacity: 0.6;
  transition: 0.2s;

  &:hover {
    margin-top: -0.3rem;
    opacity: 1;
  }
`;

const CheckIcon = styled(FiCheck)`
  margin: 0rem 0.3rem;
  padding: 0.3rem 0.3rem;
  font-size: 1.6rem;
  background-color: #63e6be;
  ${IconCommonStyles}
`;

const PendingIcon = styled(BiGitCompare)`
  margin: 0rem 0.3rem;
  margin-top: -0.1rem;
  padding: 0.43rem 0.43rem;
  font-size: 1.5rem;
  background-color: #ff922b;
  ${IconCommonStyles}
`;

const DeleteIcon = styled(AiFillDelete)`
  margin: 0rem 0.3rem;
  margin-top: -0.1rem;
  padding: 0.42rem 0.42rem;
  font-size: 1.4rem;
  background-color: #c2255c;
  ${IconCommonStyles}
`;

export default HiddenButtons;
