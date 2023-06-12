import { useState } from "react";
import Child from "./Child";

const Parents = () => {
  const [word, setWord] = useState("Hi");

  function changeWord(w) {
    setWord(w);
  }
  return (
    <>
      <div>{word}</div>
      <button onClick={() => changeWord("Hi")}>Hi!</button>
      <Child change={(w) => changeWord(w)} />
    </>
  );
};

export default Parents;
