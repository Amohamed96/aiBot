import React, { useState } from "react";
import "./page.scss";

function Prompt(props) {
  const [isLoading, setLoading] = useState(false);
  const inputHandle = props.inputHandler;
  const tokenHandle = props.tokenHandler;
  const input = props.input;
  const tokens = parseInt(props.token);

  const data = {
    prompt: input,
    temperature: 0.5,
    max_tokens: tokens,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const record = {};

  function clickCounter() {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
  }

  const submitPrompt = function () {
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      },
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((data) => {
        record.prompt = `${input}`;
        record.response = `${data.choices[0].text}`;
        window.localStorage.setItem(
          window.localStorage.getItem("clickcount"),
          JSON.stringify(record)
        );
        window.location.reload();
      });
    });
  };

  const clickButton = function () {
    setLoading(true);
    submitPrompt();
    clickCounter();
  };

  return (
    <div class="leaderboard">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <header>
        <h1 class="leaderboard__title">
          <span class="leaderboard__title--top">Genos</span>
          <span class="leaderboard__title--bottom">Your personal AI</span>
        </h1>
        <a className="git-logo" href="https://github.com/Amohamed96/aiBot">
          <i className="fa fa-github">gitHub</i>
        </a>
      </header>
      <div>
        {
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            className="prompt-box"
            placeholder="Give Genos a prompt  -  ex: Write a poem about casts or Tell me a joke"
            onChange={inputHandle}
          ></input>
        }
        <div>
          {
            <input
              type="text"
              name="token"
              id="token"
              className="token-box"
              placeholder="Response Length: Short (4-10)  Medium: (11-50)  Long: 51-1000       -      ex: 100"
              onChange={tokenHandle}
            ></input>
          }
        </div>
      </div>
      <div className="button-container">
        {" "}
        <button className="btn" onClick={clickButton}>
          Submit
        </button>
        {isLoading ? <div class="lds-dual-ring"></div> : ""}
      </div>
    </div>
  );
}

export default Prompt;
