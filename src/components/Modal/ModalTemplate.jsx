import React from "react";
import styled from "styled-components";

const ModalTemplate = ({ children, isOpened }) => {
  const openModal = () => {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
    return <ModalTemplateBlock>{children}</ModalTemplateBlock>;
  };

  const closeModal = () => {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
    return null;
  };

  return isOpened ? openModal() : closeModal();
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
