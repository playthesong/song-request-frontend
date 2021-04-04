import React from "react";
import styled, { css } from "styled-components";
import { AiFillYoutube, AiOutlineYoutube } from "react-icons/ai";
import { IoCafe, IoLogoInstagram } from "react-icons/io5";
import { RiKakaoTalkFill } from "react-icons/ri";

const POP_YOUTUBE = "https://www.youtube.com/channel/UCHgwzjeOWUpgcFxL-4HXEqQ";
const CCM_YOUTUBE = "https://www.youtube.com/channel/UC5Hu-o_v0bAOyRX8X65u4YQ";
const CAFE = "https://cafe.naver.com/realpiano";
const KAKAO_TALK = "https://open.kakao.com/o/gmAxb40c";
const INSTAGRAM = "https://www.instagram.com/realpiano_1/";

const LogoIcons = () => {
  return (
    <LogoIconsBlock>
      <IconLink href={POP_YOUTUBE} target="_blank">
        <PopYoutubeIcon />
      </IconLink>
      <IconLink href={CCM_YOUTUBE} target="_blank">
        <CCMYoutubeIcon />
      </IconLink>
      <IconLink href={CAFE} target="_blank">
        <CafeIcon />
      </IconLink>
      <IconLink href={KAKAO_TALK} target="_blank">
        <KakaoTalkIcon />
      </IconLink>
      <IconLink href={INSTAGRAM} target="_blank">
        <InstagramIcon />
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

const PopYoutubeIcon = styled(AiFillYoutube)`
  ${IconStyles}

  &:hover {
    color: #cd201f;
  }
`;

const CCMYoutubeIcon = styled(AiOutlineYoutube)`
  ${IconStyles}

  &:hover {
    color: #cd201f;
  }
`;

const CafeIcon = styled(IoCafe)`
  ${IconStyles}

  &:hover {
    color: #00c300;
  }
`;

const KakaoTalkIcon = styled(RiKakaoTalkFill)`
  ${IconStyles}

  &:hover {
    color: #ffe812;
  }
`;

const InstagramIcon = styled(IoLogoInstagram)`
  ${IconStyles}

  &:hover {
    color: #e4405f;
  }
`;

export default LogoIcons;
