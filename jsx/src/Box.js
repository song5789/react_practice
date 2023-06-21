import BoxSqure from "./BoxButton";
import React, { useState } from "react";

export const Theme = React.createContext(null);

function Box() {
  const [myStyle, setMyStyle] = useState({
    width: 500,
    height: 500,
    backgroundColor: "#e9e9e9",
    transition: "0.5s",
  });

  const send = {
    myStyle,
    setMyStyle,
  };

  return (
    <Theme.Provider value={send}>
      <BoxSqure />
    </Theme.Provider>
  );
}

export default Box;
