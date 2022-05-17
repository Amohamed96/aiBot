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
  const [tokenText, setTokenText] = useState("");
  let tokenHandler = (et) => {
    var tokenVal = et.target.value;
    setTokenText(tokenVal);
  };
  return (
    <div className="container">
      <Prompt
        inputHandler={inputHandler}
        input={inputText}
        tokenHandler={tokenHandler}
        token={tokenText}
      />
      <ResponseItems input={inputText} token={tokenText} />
    </div>
  );
}

export default App;
