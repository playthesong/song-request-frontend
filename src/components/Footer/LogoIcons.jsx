import React from "react";
import styled, { css } from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const GitHub = "https://github.com/MuseopKim";

const LogoIcons = () => {
  return (
    <LogoIconsBlock>
      <IconLink href={GitHub} target="_blank">
        <GitHubIcon />
      </IconLink>
    </LogoIconsBlock>
  );
};

const LogoIconsBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const IconLink = styled.a``;

const IconStyles = css`
  color: #fff;
  font-size: 2.3rem;
  margin: 0rem 0.7rem;
  transition: 0.1s;
  padding: 0.5rem;
  cursor: pointer;
`;

const GitHubIcon = styled(AiFillGithub)`
  ${IconStyles}
`;

export default LogoIcons;
