import React from "react";
import { AUTH } from "../../constants/auth";
import { GLOBAL_ERROR_MESSAGE } from "../../constants/errorMessage";
import GlobalError from "./GlobalError";

const STATUS = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500
};

const GlobalErrorHandler = ({ error }) => {
  const { response } = error;

  const HOME_URL = "/";
  const HOME_BUTTON = "돌아가기";

  const LOGIN_URL = process.env.REACT_APP_API_LOGIN_URL;
  const LOGIN_BUTTON = "로그인";

  if (!response) {
    return (
      <GlobalError
        url={HOME_URL}
        buttonName={HOME_BUTTON}
        errorMessage={GLOBAL_ERROR_MESSAGE.AMBIGOUS_ERROR}
      />
    );
  }

  if (response.status === STATUS.BAD_REQUEST) {
    return (
      <GlobalError
        url={HOME_URL}
        buttonName={HOME_BUTTON}
        errorMessage={response.data.message}
      />
    );
  }

  if (response.status === STATUS.UNAUTHORIZED) {
    localStorage.removeItem(AUTH.JWT_TOKEN);

    return (
      <GlobalError
        url={LOGIN_URL}
        buttonName={LOGIN_BUTTON}
        errorMessage={GLOBAL_ERROR_MESSAGE.UNAUTHORIZED}
      />
    );
  }

  if (response.status === STATUS.FORBIDDEN) {
    return (
      <GlobalError
        url={HOME_URL}
        buttonName={HOME_BUTTON}
        errorMessage={GLOBAL_ERROR_MESSAGE.FORBIDDEN}
      />
    );
  }

  if (response.status === STATUS.NOT_FOUND) {
    return (
      <GlobalError
        url={HOME_URL}
        buttonName={HOME_BUTTON}
        errorMessage={GLOBAL_ERROR_MESSAGE.NOT_FOUND}
      />
    );
  }

  if (response.status === STATUS.SERVER_ERROR) {
    return (
      <GlobalError
        url={HOME_URL}
        buttonName={HOME_BUTTON}
        errorMessage={GLOBAL_ERROR_MESSAGE.INTERNAL_SERVER_ERROR}
      />
    );
  }

  if (
    response.status > STATUS.BAD_REQUEST &&
    response.status < STATUS.SERVER_ERROR
  ) {
    return (
      <GlobalError
        url={HOME_URL}
        buttonName={HOME_BUTTON}
        errorMessage={GLOBAL_ERROR_MESSAGE.CLIENT_ERRORS}
      />
    );
  }

  if (response.status > STATUS.SERVER_ERROR) {
    return (
      <GlobalError
        url={HOME_URL}
        buttonName={HOME_BUTTON}
        errorMessage={GLOBAL_ERROR_MESSAGE.SERVER_ERRORS}
      />
    );
  }
};

export default GlobalErrorHandler;
