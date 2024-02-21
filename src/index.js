import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import "./index.css"; // 전역 스타일 파일 추가

const root = document.getElementById("root");

const rootElement = ReactDOM.createRoot(root);
rootElement.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
