import React from "react";
import styled from "styled-components";
import loadingImage from "../../assets/loading.png";

const Loading = ({ position }) => {
  return (
    <LoadingBlock position={position}>
      <LoadingImg src={loadingImage} />
    </LoadingBlock>
  );
};

const LoadingBlock = styled.div`
  position: absolute;
  top: ${props => `${props.position}%`};
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${({ theme }) => theme.device.mobile} {
    top: 57%;
  }
`;

const LoadingImg = styled.img`
  max-width: 5rem;
  opacity: 0.1;

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 3.5rem;
  }
`;

export default Loading;
