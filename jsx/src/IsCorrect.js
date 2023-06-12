import { useState, useRef } from "react";

function IsCorrect() {
  const [obj, setObj] = useState({
    value: "",
  });
  const textBox = useRef();

  const { value } = obj;

  const setText = (e) => {
    let newObj = {
      ...obj,
      [e.target.name]: e.target.value,
    };
    setObj(newObj);
  };

  // current 안에 해당 요소가 있음

  const checkValue = (e) => {
    if (textBox.current.value === "1234") textBox.current.className = "correct";
    else textBox.current.className = "wrong";
  };

  return (
    <>
      <div>
        <input type="text" name="value" value={value} ref={textBox} placeholder="input number..." onChange={setText} />
      </div>
      <div>
        <button onClick={checkValue}>확인</button>
      </div>
    </>
  );
}

export default IsCorrect;
