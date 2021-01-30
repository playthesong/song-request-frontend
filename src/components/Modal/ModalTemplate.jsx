import React from "react";
import styled from "styled-components";

const ModalTemplate = ({ children, isActivated }) => {
  return isActivated ? (
    <ModalTemplateBlock>{children}</ModalTemplateBlock>
  ) : null;
};

const ModalTemplateBlock = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.7);
`;

export default ModalTemplate;
