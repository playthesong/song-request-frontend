import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import { IoIosHeart } from "react-icons/io";
import altImage from "../../assets/alt.png";

const TITLE_MAX_LENGTH = 25;

const Song = ({ song, ranking }) => {
  const { title, artist, imageUrl, requestCount } = song;
  return (
    <SongBlock>
      <RankingNumber>{ranking}</RankingNumber>
      <SongDetailsWrap>
        <AlbumImage src={imageUrl ? imageUrl : altImage} />
        <SongDetails>
          <Title>
            {parse(
              title.length > TITLE_MAX_LENGTH
                ? `${title.slice(0, TITLE_MAX_LENGTH)}...`
                : title
            )}
          </Title>
          <Artist>{parse(artist)}</Artist>
        </SongDetails>
      </SongDetailsWrap>
      <RequestCountWrap>
        <RequestCountInner>
          <LikeIcon />
          <RequestCount>{requestCount}</RequestCount>
        </RequestCountInner>
      </RequestCountWrap>
    </SongBlock>
  );
};

const SongBlock = styled.li`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3rem 1rem;
  width: 60rem;

  border-top: 1px solid rgba(0, 0, 0, 0.08);

  &:last-child {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media ${({ theme }) => theme.device.mobile} {
    max-width: 30rem;
    padding: 2.1rem 1rem;
  }
`;

const RankingNumber = styled.span`
  flex: 1;
  font-size: 1.5rem;
  margin: 0rem 0.3rem 0rem 1.5rem;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 500;

  @media ${({ theme }) => theme.device.mobile} {
    margin: 0rem 0.8rem 0rem 0.5rem;
  }
`;

const SongDetailsWrap = styled.div`
  display: flex;
  align-items: center;
  flex: 9;
`;

const AlbumImage = styled.img`
  width: 7rem;
  height: 7rem;
  box-shadow: 3px 2px 10px 1px rgba(0, 0, 0, 0.15);

  @media ${({ theme }) => theme.device.mobile} {
    width: 5.5rem;
    height: 5.5rem;
  }
`;

const SongDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2.1rem;

  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 1.5rem;
  }
`;

const Title = styled.span`
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 500;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.25rem;
  }
`;

const Artist = styled.span`
  font-size: 1.2rem;
  margin-top: 0.8rem;
  color: rgba(0, 0, 0, 0.5);

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.1rem;
  }
`;

const RequestCountWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  min-width: 7rem;
`;

const RequestCountInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LikeIcon = styled(IoIosHeart)`
  font-size: 2.1rem;
  color: #ffdeeb;

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.7rem;
  }
`;

const RequestCount = styled.span`
  font-size: 1.25rem;
  margin-top: 0.7rem;
  color: rgba(0, 0, 0, 0.5);

  @media ${({ theme }) => theme.device.mobile} {
    font-size: 1.1rem;
  }
`;

export default Song;
