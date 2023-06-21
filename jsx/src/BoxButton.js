import React, { useContext } from "react";
import { Theme } from "./Box";

function BoxButton() {
  const { myStyle, setMyStyle } = useContext(Theme);

  const changeColor = (e) => {
    const { value } = e.target;
    setMyStyle((myStyle) => ({
      ...myStyle,
      backgroundColor: value,
    }));
  };

  return (
    <div style={myStyle}>
      <button value="blue" onClick={changeColor}>
        blue
      </button>
      <button value="red" onClick={changeColor}>
        red
      </button>
      <button value="green" onClick={changeColor}>
        green
      </button>
    </div>
  );
}

function BoxSqure() {
  return (
    <>
      <BoxButton />
    </>
  );
}
export default BoxSqure;
