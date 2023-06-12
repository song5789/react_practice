import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FuncEvent from "./FuncEvent";
import Event from "./Event";
import IsCorrect from "./IsCorrect";

// 컴포넌트로 구성하면 재사용율이 높고, 관리가 쉬워짐.

const root = ReactDOM.createRoot(document.getElementById("root"));

class World extends Component {
  render() {
    return (
      <div>
        <h1>Hello, {this.props.who}</h1>
      </div>
    );
  }
}

function Hello(props) {
  return (
    <div>
      <h1>Hello! {props.who}</h1>
    </div>
  );
}

const SayTo = (props) => {
  return (
    <div>
      <h1>Say! {props.to}</h1>
    </div>
  );
};

root.render(
  <>
    <World who="홍길동" />
    <Hello who="Function!" />
    <SayTo to="마길동" />
  </>
);
