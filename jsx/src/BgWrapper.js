import { useRef, useState } from "react";

function BgWrapper(props) {
  const [myName, setMyName] = useState("");
  const [styleValue, setStyleValue] = useState({
    bgColor: "",
    bgImg: "",
  });

  const { bgColor, bgImg } = styleValue;
  const myStyle = {
    top: 0,
    height: "100vh",
    backgroundColor: bgColor,
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  function setBgColor(e) {
    setStyleValue({
      bgColor: e.target.value,
      bgImg: "",
    });
  }

  function setBgImg(e) {
    setStyleValue({
      bgImg: "https://a.cdn-hotels.com/gdcs/production110/d428/ec82f6c7-98e3-4f24-a6d0-90e5330ee777.jpg",
    });
  }

  return (
    <div className="bg" style={myStyle}>
      {props.children}
      <div style={{ position: "relative", zIndex: 1 }}>
        <button onClick={setBgColor} value="red">
          set BG red
        </button>
        <button onClick={setBgColor} value="green">
          set BG green
        </button>
        <button onClick={setBgColor} value="blue">
          set BG blue
        </button>
        <button onClick={setBgImg}>set BG img</button>
      </div>
    </div>
  );
}

export default BgWrapper;
