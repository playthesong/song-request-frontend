import React from "react";
import { GLOBAL_ERROR_MESSAGE } from "../../constants/errorMessage";
import GlobalError from "./GlobalError";

const ERROR_STATUS = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

const GlobalErrorHandler = ({ error }) => {
  const { response } = error;

  if (!response) {
    return <GlobalError errorMessage={GLOBAL_ERROR_MESSAGE.AMBIGOUS_ERROR} />;
  }

  if (response.status === ERROR_STATUS.BAD_REQUEST) {
    return <GlobalError errorMessage={GLOBAL_ERROR_MESSAGE.BAD_REQUEST} />;
  }

  if (response.status === ERROR_STATUS.UNAUTHORIZED) {
    return <GlobalError errorMessage={GLOBAL_ERROR_MESSAGE.UNAUTHORIZED} />;
  }

  if (response.status === ERROR_STATUS.FORBIDDEN) {
    return <GlobalError errorMessage={GLOBAL_ERROR_MESSAGE.FORBIDDEN} />;
  }

  if (response.status === ERROR_STATUS.NOT_FOUND) {
    return <GlobalError errorMessage={GLOBAL_ERROR_MESSAGE.NOT_FOUND} />;
  }

  if (response.status === ERROR_STATUS.SERVER_ERROR) {
    return (
      <GlobalError errorMessage={GLOBAL_ERROR_MESSAGE.INTERNAL_SERVER_ERROR} />
    );
  }

  if (
    response.status > ERROR_STATUS.BAD_REQUEST &&
    response.status < ERROR_STATUS.SERVER_ERROR
  ) {
    return <GlobalError errorMessage={GLOBAL_ERROR_MESSAGE.CLIENT_ERRORS} />;
  }

  if (response.status > ERROR_STATUS.SERVER_ERROR) {
    return <GlobalError errorMessage={GLOBAL_ERROR_MESSAGE.SERVER_ERRORS} />;
  }
};

export default GlobalErrorHandler;
