import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/reduxStore";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

let DOMStructure = () => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

DOMStructure();
