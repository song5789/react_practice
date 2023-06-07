import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Side, { Side2 } from "./Side";
import Func, { Func2 } from "./Func";
import Props from "./Props";

// 컴포넌트로 구성하면 재사용율이 높고, 관리가 쉬워짐.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Func />
    <Func2 />
    <Props name="고길동" age={28} />
  </>
);

const side = ReactDOM.createRoot(document.getElementById("side"));
side.render(
  <>
    <ol>
      <Side />
    </ol>
    <Side2 />
  </>
);
