import React, { useEffect } from "react";
import queryString from "query-string";
import { login } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Auth } from "../constants/auth";

const OAuth = ({ location: { search } }) => {
  const { key } = queryString.parse(search);
  const { user, jwtToken, loading, error } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  console.log(jwtToken, user);
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

  if (!user || !jwtToken) {
    return null;
  }

  localStorage.setItem(Auth.JWT_TOKEN, jwtToken);
  localStorage.setItem(Auth.USER, JSON.stringify(user));

  return <Redirect to="/" />;
};

export default OAuth;
