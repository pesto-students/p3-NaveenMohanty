import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import Room from "./room";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Room />
  </Provider>,
  document.getElementById("root")
);
