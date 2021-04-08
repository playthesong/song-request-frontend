import React, { useEffect } from "react";
import queryString from "query-string";
import { login } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { AUTH } from "../constants/auth";
import MainTemplate from "../components/Template/Main/MainTemplate";
import Loading from "../components/Loading/Loading";
import GlobalErrorHandler from "../components/Error/GlobalErrorHandler";

const OAuth = ({ location: { search } }) => {
  const { key } = queryString.parse(search);
  const { currentUser, jwtToken, loading, error } = useSelector(
    state => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (key) {
      dispatch(login(key));
    }
  }, [key, dispatch]);

  if (loading) {
    return (
      <MainTemplate>
        <Loading position={50} />
      </MainTemplate>
    );
  }

  if (error) {
    return (
      <MainTemplate>
        <GlobalErrorHandler error={error} />
      </MainTemplate>
    );
  }

  if (!currentUser || !jwtToken) {
    return <MainTemplate></MainTemplate>;
  }

  localStorage.setItem(AUTH.JWT_TOKEN, jwtToken);

  return <Redirect to="/" />;
};

export default OAuth;
