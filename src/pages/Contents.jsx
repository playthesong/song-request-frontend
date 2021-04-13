import React from "react";
import MainTemplate from "../components/Template/Main/MainTemplate";
import ReactHelmet from "../common/ReactHelmet";
import styled from "styled-components";
import albums from "../mockData/album";

const Contents = () => {
  return (
    <>
      <ReactHelmet title={"금주의 추천 앨범"} />
      <MainTemplate>
        <ContentsBlock>
          {albums.map(album => (
            <Album key={album.id} href={album.link} target="_blank">
              <AlbumImage src={album.imageUrl} />
              <Title>{album.title}</Title>
              <Artist>{album.artist}</Artist>
            </Album>
          ))}
        </ContentsBlock>
      </MainTemplate>
    </>
  );
};

const ContentsBlock = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Album = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30rem;
  cursor: pointer;
  margin: 2.5rem 1rem;
`;

const AlbumImage = styled.img`
  width: 17rem;
  height: 17rem;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.2),
    0 8px 16px -8px rgba(0, 0, 0, 0.2), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 10px 30px 3px rgba(0, 0, 0, 0.3);
  }
`;

const Title = styled.h2`
  margin-top: 1.2rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
`;

const Artist = styled.span`
  margin-top: 0.35rem;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.5);
`;

export default Contents;
