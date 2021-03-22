import React from "react";
import styled from "styled-components";
import realpianoLogo from "../../assets/realpiano_logo_white.jpg";

const Loading = () => {
  return (
    <LoadingBlock>
      <LoadingImg src={realpianoLogo} />
    </LoadingBlock>
  );
};

const LoadingBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingImg = styled.img`
  max-width: 3rem;
  opacity: 0.3;
`;

export default Loading;
