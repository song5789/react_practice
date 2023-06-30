import { useState } from "react";
import logo from "./logo.svg";

import NewCategories from "./NewsCategories";
import NewsList from "./NewsList";

function App() {
  const [category, setCategory] = useState("all");

  const onSelect = (category) => {
    setCategory(category);
  };

  return (
    <>
      <NewCategories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
}

export default App;
