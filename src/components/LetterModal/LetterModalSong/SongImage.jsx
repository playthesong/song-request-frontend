import React from "react";
import styled from "styled-components";
import altImage from "../../../assets/alt.png";

const SongImage = ({ imageUrl }) => {
  if (!imageUrl) {
    imageUrl = altImage;
  }

  return <StyledSongImage src={imageUrl} />;
};

const StyledSongImage = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 0.5rem;
`;

export default SongImage;
