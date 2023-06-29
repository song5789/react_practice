import { useState } from "react";
import axios from "axios";

function GetUserInfo() {
  const [data, setData] = useState("");

  const onClick = async () => {
    try {
      const res = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=e998577ca9cf44f2ae169e7ae5832458");
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  // JWT - JSON Web token
  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={onClick}>Click</button>
    </>
  );
}

export default GetUserInfo;

//e998577ca9cf44f2ae169e7ae5832458 <- NewsAPI
