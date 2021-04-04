import React from "react";
import ReactHelmet from "../common/ReactHelmet";
import GlobalErrorHandler from "../components/Error/GlobalErrorHandler";
import MainTemplate from "../components/Template/Main/MainTemplate";

const ErrorPage = () => {
  return (
    <>
      <ReactHelmet title={"에러"} />
      <MainTemplate>
        <GlobalErrorHandler error />
      </MainTemplate>
    </>
  );
};

export default ErrorPage;
