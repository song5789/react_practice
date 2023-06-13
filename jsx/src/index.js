import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Member from "./Member";

// 컴포넌트로 구성하면 재사용율이 높고, 관리가 쉬워짐.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Member />
  </>
);
