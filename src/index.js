import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import App from "./App";
import { AUTH } from "./constants/auth";
import rootReducer from "./modules";
import { validate } from "./modules/auth";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const loadUser = () => {
  try {
    const jwtToken = localStorage.getItem(AUTH.JWT_TOKEN);

    if (!jwtToken) return;

    store.dispatch(validate(jwtToken));
    throw new Error();
  } catch (error) {
    console.error(error);
  }
};

loadUser();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
