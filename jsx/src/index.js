import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CLHello from "./CLHello";
import BgWrapper from "./BgWrapper";

// 컴포넌트로 구성하면 재사용율이 높고, 관리가 쉬워짐.

const root = ReactDOM.createRoot(document.getElementById("root"));

const setBodyColor = (color) => {
  const body = document.body;
  body.backgroundColor = color;
};

root.render(
  <>
    <BgWrapper>
      <CLHello name="홍길동" age={27}>
        <div>Inner CLHello</div>
      </CLHello>
    </BgWrapper>
  </>
);
