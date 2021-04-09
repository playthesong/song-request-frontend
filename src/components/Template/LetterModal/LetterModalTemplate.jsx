import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { mouseEnter, mouseLeave } from "../../../modules/letterModal";

const LetterModalTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const onMouseEnter = () => dispatch(mouseEnter());
  const onMouseLeave = () => dispatch(mouseLeave());

  return (
    <LetterModalTemplateBlock
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </LetterModalTemplateBlock>
  );
};

const LetterModalTemplateBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 38rem;
  min-height: 40.8rem;
  box-shadow: 3px -3px 5px 1px rgba(253, 253, 253, 0.03);
  background-color: #fbfbfd;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 4.5rem 4.5rem 6rem 4.5rem;

  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 3.5rem 3rem;
    top: 32%;
  }
`;

export default LetterModalTemplate;
