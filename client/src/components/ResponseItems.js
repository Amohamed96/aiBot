import React, { useState, useEffect } from "react";
import { OpenAIApi } from "openai";
import "./page.scss";
const openai = new OpenAIApi();

function ResponseItems() {
  const [responses1, setResponses1] = useState("");
  const [responses2, setResponses2] = useState("");
  const [responses3, setResponses3] = useState("");
  const [responses4, setResponses4] = useState("");

  // function allStorage() {
  //   var values = [],
  //     keys = Object.keys(localStorage),
  //     i = keys.length;

  //   while (i--) {
  //     values.push(localStorage.getItem(re));
  //   }
  //   console.log(responses);
  //   setResponses(values);
  // }
  useEffect(() => {
    let res1 = JSON.parse(window.localStorage.getItem("1"));

    let res2 = JSON.parse(window.localStorage.getItem("2"));

    let res3 = JSON.parse(window.localStorage.getItem("3"));

    let res4 = JSON.parse(window.localStorage.getItem("4"));

    if (res1) {
      setResponses1("Prompt: " + res1.prompt + "Response: " + res1.response);
    }

    if (res2) {
      setResponses2("Prompt: " + res2.prompt + "Response: " + res2.response);
    }

    if (res3) {
      setResponses3(
        "Prompt: " + res3.prompt + "/n" + "Response: " + res3.response
      );
    }

    if (res4) {
      setResponses4("Prompt: " + res4.prompt + "Response: " + res4.response);
    }
  }, []);

  return (
    <div>
      <div>
        Responses
        <div className="responses">{responses1}</div>
      </div>
      <div class="leaderboard">
        <header>
          <h1 class="leaderboard__title">
            <span class="leaderboard__title--top">Forbes</span>
            <span class="leaderboard__title--bottom">Leaderboard</span>
          </h1>
        </header>

        <main class="leaderboard__profiles">
          <article class="leaderboard__profile">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Mark Zuckerberg"
              class="leaderboard__picture"
            />
            <span class="leaderboard__name">{responses1}</span>
            <span class="leaderboard__value">
              35.7<span>B</span>
            </span>
          </article>

          <article class="leaderboard__profile">
            <img
              src="https://randomuser.me/api/portraits/men/97.jpg"
              alt="Dustin Moskovitz"
              class="leaderboard__picture"
            />
            <span class="leaderboard__name">{responses2}</span>
            <span class="leaderboard__value">
              9.9<span>B</span>
            </span>
          </article>

          <article class="leaderboard__profile">
            <img
              src="https://randomuser.me/api/portraits/women/17.jpg"
              alt="Elizabeth Holmes"
              class="leaderboard__picture"
            />
            <span class="leaderboard__name">{responses3}</span>
            <span class="leaderboard__value">
              4.5<span>B</span>
            </span>
          </article>

          <article class="leaderboard__profile">
            <img
              src="https://randomuser.me/api/portraits/men/37.jpg"
              alt="Evan Spiegel"
              class="leaderboard__picture"
            />
            <span class="leaderboard__name">{responses4}</span>
            <span class="leaderboard__value">
              2.1<span>B</span>
            </span>
          </article>
        </main>
      </div>
    </div>
  );
}

export default ResponseItems;
