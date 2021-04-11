import React from "react";
import { Helmet } from "react-helmet";

const ReactHelmet = ({ title }) => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <title>{`Play The Song | ${title}`}</title>
      <meta name="title" property="og:title" content="RealPiano Live 신청곡" />
      <meta
        name="description"
        property="og:description"
        content="리얼피아노 유튜브 방송에 신청곡을 남겨주세요 :)"
      />
      <meta
        name="image"
        property="og:image"
        content="http://www.realpianolive.com/static/media/realpiano_logo_white.3ec599fb.jpg"
      />
      <meta name="url" property="og:url" content="" />
    </Helmet>
  );
};

export default ReactHelmet;
