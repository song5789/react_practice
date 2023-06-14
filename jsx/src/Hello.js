import { useState } from "react";

function Hello(props) {
  const { name, isSpecial } = props;

  const [color, setColor] = useState("inherite");

  function colorChange(e) {
    setColor(e.target.name);
  }

  return (
    <>
      <div style={{ color: color, zIndex: 1, position: "relative" }}>
        <h1 style={{ margin: 0 }}>
          {isSpecial && <b>*</b>}안녕하세요{name}
        </h1>
        <div>
          <button name="red" onClick={colorChange}>
            red
          </button>
          <button name="green" onClick={colorChange}>
            green
          </button>
          <button name="blue" onClick={colorChange}>
            blue
          </button>
        </div>
      </div>
    </>
  );
}

export default Hello;
