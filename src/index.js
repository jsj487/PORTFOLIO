import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // 전역 스타일 파일
import App from "./App"; // App 컴포넌트를 import

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
