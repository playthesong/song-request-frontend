import React from "react";
import styled from "styled-components";

const SongAbout = ({ children }) => {
  return <SongAboutBlock>{children}</SongAboutBlock>;
};

const SongAboutBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 2rem;
  margin-bottom: 0.2rem;
`;

export default SongAbout;
