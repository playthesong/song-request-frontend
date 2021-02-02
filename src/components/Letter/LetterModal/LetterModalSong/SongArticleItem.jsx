import React from "react";
import styled, { css } from "styled-components";

const SongArticleItem = ({ articleName, itemName }) => {
  return (
    <SongArticleItemBlock articleName={articleName}>
      {itemName}
    </SongArticleItemBlock>
  );
};

const SongArticleItemBlock = styled.span`
  ${props =>
    props.articleName === "TITLE"
      ? css`
          font-size: 1.2rem;
          font-weight: 600;
        `
      : css`
          font-size: 1.2rem;
          opacity: 0.9;
        `}

  height: 1.445rem;
  padding: 0.38rem 0.1rem 0.3rem 0.1rem;
`;

export default SongArticleItem;
