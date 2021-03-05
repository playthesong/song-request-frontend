import React, { useEffect } from "react";
import queryString from "query-string";
import { login } from "../modules/auth";
import { useDispatch } from "react-redux";

const OAuth = ({ location: { search } }) => {
  const { key } = queryString.parse(search);
  const dispatch = useDispatch();

  useEffect(() => {
    if (key) {
      dispatch(login(key));
    }
  }, [key]);

  return <div>OAuth</div>;
};

export default OAuth;
