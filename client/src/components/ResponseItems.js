import React, { useState, useEffect } from "react";
import { OpenAIApi } from "openai";
import "./page.scss";
const openai = new OpenAIApi();

function ResponseItems() {
  const [responses1, setResponses1] = useState("");
  const [responses2, setResponses2] = useState("");
  const [responses3, setResponses3] = useState("");
  const [responses4, setResponses4] = useState("");

  const [prompts1, setPrompts1] = useState("");
  const [prompts2, setPrompts2] = useState("");
  const [prompts3, setPrompts3] = useState("");
  const [prompts4, setPrompts4] = useState("");

  useEffect(() => {
    let res1 = JSON.parse(
      window.localStorage.getItem(window.localStorage.getItem("clickcount"))
    );

    let res2 = JSON.parse(
      window.localStorage.getItem(window.localStorage.getItem("clickcount") - 1)
    );

    let res3 = JSON.parse(
      window.localStorage.getItem(window.localStorage.getItem("clickcount") - 2)
    );

    let res4 = JSON.parse(
      window.localStorage.getItem(window.localStorage.getItem("clickcount") - 3)
    );

    if (res1) {
      setResponses1(res1.response);
      console.log(res1.responses1);
    }

    if (res2) {
      setResponses2(res2.response);
    }

    if (res3) {
      setResponses3(res3.response);
    }

    if (res4) {
      setResponses4(res4.response);
    }

    if (res1) {
      setPrompts1("Prompt: " + res1.prompt);
    }

    if (res2) {
      setPrompts2("Prompt: " + res2.prompt);
    }

    if (res3) {
      setPrompts3("Prompt: " + res3.prompt);
    }

    if (res4) {
      setPrompts4("Prompt: " + res4.prompt);
    }
  }, []);
  console.log(window.localStorage.getItem("clickcount"));
  return (
    <div class="leaderboard">
      <main class="leaderboard__profiles">
        <article class="leaderboard__profile">
          <span class="leaderboard__name">{prompts1}</span>
          <br></br>
          <span class="leaderboard__value"> {responses1}</span>
        </article>

        <article class="leaderboard__profile">
          <span class="leaderboard__name">{prompts2}</span>
          <br></br>
          <span class="leaderboard__value"> {responses2}</span>
        </article>

        <article class="leaderboard__profile">
          <span class="leaderboard__name">{prompts3}</span>
          <br></br>
          <span class="leaderboard__value"> {responses3}</span>
        </article>

        <article class="leaderboard__profile">
          <span class="leaderboard__name">{prompts4}</span>
          <br></br>
          <span class="leaderboard__value"> {responses4}</span>
        </article>
      </main>
    </div>
  );
}

export default ResponseItems;
