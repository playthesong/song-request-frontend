import React from "react";
import styled from "styled-components";

const SongImage = ({ imageUrl }) => {
  return <StyledSongImage src={imageUrl} />;
};

const StyledSongImage = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 0.5rem;
`;

export default SongImage;
