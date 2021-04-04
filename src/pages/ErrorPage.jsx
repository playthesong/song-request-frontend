import React from "react";
import GlobalErrorHandler from "../components/Error/GlobalErrorHandler";
import MainTemplate from "../components/Template/Main/MainTemplate";

const ErrorPage = () => {
  return (
    <MainTemplate>
      <GlobalErrorHandler error />
    </MainTemplate>
  );
};

export default ErrorPage;
