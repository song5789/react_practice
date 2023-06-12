import { useState } from "react";

const FuncCounter = (props) => {
  const [number, setNumber] = useState(0); // Hook
  const [color, setColor] = useState("black");
  return (
    <div>
      <div style={{ color }}>{props.fName}</div> {/* style 은 객체로 넣어야함*/}
      <div>{number}</div>
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
};

// 함수형은 this 가 없어 state도 없음!
// useState 로 state 처럼 사용가능.

export default FuncCounter;
