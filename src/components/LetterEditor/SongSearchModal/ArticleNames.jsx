import React from "react";
import styled from "styled-components";

const ArticleNames = () => {
  return (
    <ArticleNamesBlock>
      <ArticleName>ALBUM</ArticleName>
      <ArticleName>TITLE</ArticleName>
      <ArticleName>SELECT</ArticleName>
    </ArticleNamesBlock>
  );
};

const ArticleNamesBlock = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ArticleName = styled.span`
  box-sizing: border-box;
  font-size: 1.1rem;
  font-weight: 700;
  color: #adb5bd;

  &:nth-child(1) {
    flex: 6;
    margin-left: 1rem;
  }
  &:nth-child(2) {
    flex: 8;
  }
  &:nth-child(3) {
    flex: 2;
    text-align: center;
  }
`;

export default ArticleNames;
