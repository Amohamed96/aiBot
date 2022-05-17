import React, { useState } from "react";
import Prompt from "./components/Prompt";
import ResponseItems from "./components/ResponseItems";

function App() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      CHAT BOT TYPE A THING AND SAY SOMETHING
      <Prompt inputHandler={inputHandler} input={inputText} />
      <ResponseItems />
    </div>
  );
}

export default App;
