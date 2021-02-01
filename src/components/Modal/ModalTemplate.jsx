import React from "react";
import styled from "styled-components";

const ModalTemplate = ({ children, isActivated }) => {
  const activateModal = () => {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
    return <ModalTemplateBlock>{children}</ModalTemplateBlock>;
  };

  const deActivateModal = () => {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
    return null;
  };

  return isActivated ? activateModal() : deActivateModal();
};

const ModalTemplateBlock = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
`;

export default ModalTemplate;
