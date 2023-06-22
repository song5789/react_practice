import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Button from "./components/Button";

// 컴포넌트로 구성하면 재사용율이 높고, 관리가 쉬워짐.

const root = ReactDOM.createRoot(document.getElementById("root"));
/*
const PRODUCTS = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];
*/

root.render(
  <div className="App">
    <div className="buttons">
      <Button size={"large"} onClick={() => console.log("Click!")}>
        Button
      </Button>
      <Button>Button</Button>
      <Button size={"small"}>Button</Button>
    </div>
    <div className="buttons">
      <Button size={"large"} color="gray">
        Button
      </Button>
      <Button color="gray">Button</Button>
      <Button size={"small"} color="gray">
        Button
      </Button>
    </div>
    <div className="buttons">
      <Button size={"large"} color="pink">
        Button
      </Button>
      <Button color="pink">Button</Button>
      <Button size={"small"} color="pink">
        Button
      </Button>
    </div>
    <div className="buttons">
      <Button size={"large"} color="blue" outline>
        Button
      </Button>
      <Button color="gray" outline>
        Button
      </Button>
      <Button size={"small"} color="pink" outline>
        Button
      </Button>
    </div>
    <div className="buttons">
      <Button size={"large"} color="blue" fullWidth>
        Button
      </Button>
      <Button size={"large"} color="gray" fullWidth>
        Button
      </Button>
      <Button size={"large"} color="pink" fullWidth>
        Button
      </Button>
    </div>
    <div className="buttons">
      <Button size={"large"} color="blue" fullWidth outline>
        Button
      </Button>
      <Button size={"large"} color="gray" fullWidth outline>
        Button
      </Button>
      <Button size={"large"} color="pink" fullWidth outline>
        Button
      </Button>
    </div>
  </div>
);
