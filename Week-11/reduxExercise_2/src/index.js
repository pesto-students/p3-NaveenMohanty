import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/store";
import StepCounter from "./StepCounter";

ReactDOM.render(
  <Provider store={store}>
    <StepCounter />
  </Provider>,
  document.getElementById("root")
);
