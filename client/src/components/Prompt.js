import React, { useState } from "react";
import "./page.scss";
import ResponseItems from "./ResponseItems";

function Prompt(props) {
  const inputHandle = props.inputHandler;
  const input = props.input;
  const tokens = parseInt(props.token);

  return (
    <div>
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
        </div>
      </div>

      <ResponseItems input={input} token={tokens} />
    </div>
  );
}

export default Prompt;
