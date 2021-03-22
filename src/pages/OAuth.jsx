import React, { useEffect } from "react";
import queryString from "query-string";
import { login } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { AUTH } from "../constants/auth";

const OAuth = ({ location: { search } }) => {
  const { key } = queryString.parse(search);
  const { currentUser, jwtToken, loading, error } = useSelector(
    state => state.auth
  );
  const dispatch = useDispatch();

  console.log(jwtToken, currentUser);
  useEffect(() => {
    if (key) {
      dispatch(login(key));
    }
  }, [key, dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }

  if (!currentUser || !jwtToken) {
    return null;
  }

  localStorage.setItem(AUTH.JWT_TOKEN, jwtToken);

  return <Redirect to="/" />;
};

export default OAuth;
