import React from "react";
import styled from "styled-components";

const SongArticle = ({ children }) => {
  return <SongArticleBlock>{children}</SongArticleBlock>;
};

const SongArticleBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.9rem;
`;

export default SongArticle;
