import React from "react";
import { Helmet } from "react-helmet";

const ReactHelmet = () => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default ReactHelmet;
