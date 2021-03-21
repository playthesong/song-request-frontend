import React from "react";
import styled from "styled-components";
import realpiano_logo_alt from "../../../assets/realpiano_logo_alt.png";

const SongImage = ({ imageUrl }) => {
  if (!imageUrl) {
    imageUrl = realpiano_logo_alt;
  }

  return <StyledSongImage src={imageUrl} />;
};

const StyledSongImage = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 0.5rem;
`;

export default SongImage;
