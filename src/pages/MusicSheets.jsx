import React, { useState } from "react";
import styled from "styled-components";
import MainTemplate from "../components/Template/Main/MainTemplate";
import useModal from "../hooks/useModal";
import products from "../mockData/musicsheets";

const MusicSheets = () => {
  const [id, setId] = useState(null);
  const [isOpened, openModal, closeModal] = useModal();

  const inActivateScroll = () => {
    document.body.style.overflow = "hidden";
    document.body.scroll = "no";
  };

  const activateScroll = () => {
    document.body.style.overflow = "scroll";
    document.body.scroll = "yes";
  };

  const onOpenModal = id => {
    setId(id);
    openModal();
    inActivateScroll();
  };

  const onCloseModal = () => {
    setId(null);
    closeModal();
    activateScroll();
  };

  return (
    <>
      <MainTemplate>
        <MusicSheetsBlock>
          {products.map(product => (
            <MusicSheet
              key={product.id}
              src={product.imageUrl}
              onClick={() => onOpenModal(product.id)}
            />
          ))}
        </MusicSheetsBlock>
      </MainTemplate>
      <DimmedBackground isOpened={isOpened}>
        <Title>수록곡</Title>
        <TrackList>
          {products
            .filter(product => product.id === id)
            .map(product => product.songs)
            .map(songs =>
              songs.map((song, index) => (
                <Track key={index}>{`${index + 1}. ${song}`}</Track>
              ))
            )}
        </TrackList>
        <CloseButton onClick={onCloseModal}>닫기</CloseButton>
      </DimmedBackground>
    </>
  );
};

const MusicSheetsBlock = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;

const MusicSheet = styled.img`
  max-width: 21rem;
  max-height: 21rem;
  margin: 5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.2),
    0 8px 16px -8px rgba(0, 0, 0, 0.2), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  transition: 0.3s;

  &:hover {
    box-shadow: 0px 25px 30px 3px rgba(0, 0, 0, 0.3);
  }
`;

const DimmedBackground = styled.div`
  display: ${props => (props.isOpened ? "flex" : "none")};
  position: fixed;
  width: 100vw;
  min-height: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.8);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.7rem;
  color: #fff;
  padding: 1.1rem 0rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const TrackList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
`;

const Track = styled.li`
  color: rgba(255, 255, 255, 0.8);
  padding: 1.5rem;
  font-size: 1.5rem;
`;

const CloseButton = styled.button`
  margin-top: 3rem;
  padding: 0.5rem 1.7rem;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.3rem;
  background-color: #f06595;
  color: #fff;
  box-shadow: 5px 1px 35px 1px rgba(255, 255, 255, 0.25);
`;

export default MusicSheets;
