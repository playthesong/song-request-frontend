import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const ModalTemplate = ({ children }) => {
  const { isOpened } = useSelector(state => state.letterModal);
  const openModal = () => {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
    return <ModalTemplateBlock>{children}</ModalTemplateBlock>;
  };

  return isOpened ? openModal() : null;
};

const ModalTemplateBlock = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default ModalTemplate;
