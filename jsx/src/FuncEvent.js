import { useState, useRef } from "react";

function FuncEvent() {
  const [obj, setObj] = useState({
    value: "",
    msg: "",
  });

  const myInput = useRef(); // 함수형은 hook 으로 ref 설정.

  const { value, msg } = obj;

  const handleChange = (e) => {
    const newObj = {
      ...obj,
      [e.target.name]: e.target.value,
    };
    setObj(newObj);
  };

  let showValue = (e, v) => {
    if (e.keyCode === 13) console.log(v);
  };

  let clear = () => {
    setObj({
      value: "",
      msg: "",
    });
    myInput.current.focus();
  };
  return (
    <>
      <div>
        <input type="text" name="value" value={value} ref={myInput} placeholder="message..." onChange={handleChange} onKeyUp={(e) => showValue(e, value)}></input>
      </div>
      <div>
        <input type="text" name="msg" value={msg} placeholder="message..." onChange={handleChange} onKeyUp={(e) => showValue(e, msg)}></input>
      </div>
      <button onClick={clear}>Clear</button>
    </>
  );
}

export default FuncEvent;
