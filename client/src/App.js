import React, { useState } from "react";
import Prompt from "./components/Prompt";
import ResponseItems from "./components/ResponseItems";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div className="container">
      <Prompt inputHandler={inputHandler} input={inputText} />
      <ResponseItems input={inputText} />
    </div>
  );
}

export default App;
