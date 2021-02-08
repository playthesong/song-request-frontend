import React from "react";
import styled from "styled-components";

const SongArticleName = ({ articleName }) => {
  return <StyledSongArticleName>{articleName}</StyledSongArticleName>;
};

const StyledSongArticleName = styled.div`
  display: inline-block;
  opacity: 0.7;
  font-weight: 800;
  font-size: 1rem;
  margin-bottom: 0.07rem;
  color: #d6336c;
`;

export default SongArticleName;
