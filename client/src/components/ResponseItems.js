import React, { useState, useEffect } from "react";
import "./page.scss";

function ResponseItems(input, response) {
  const shortResponse = 15;
  const mediumResponse = 50;
  const longResponse = 500;
  const [length, setLength] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [shortSelected, setShortSelected] = useState("");
  const [mediumSelected, setMediumSelected] = useState("");
  const [longSelected, setLongSelected] = useState("");

  // What is being sent to OpenAI
  const data = {
    prompt: input.input,
    temperature: 0.5,
    max_tokens: length,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  // Create item state which contains the prompts and responses and sets it in LocalStorage so it can persist
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  localStorage.setItem("data", JSON.stringify(items));

  // This function makes the Api call and your input will save as the prompt, the response is the Open Ai generated text
  const submitPrompt = function (prompt) {
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_KEY}`,
      },
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((data) => {
        const answer = `${data.choices[0].text}`;
        console.log("ANSWER: ", answer);
        setItems((items) => [...items, { prompt: prompt, response: answer }]);
      });
    });
    setIsLoading(true);
  };

  // Which Size Response is selected
  useEffect(() => {
    setIsLoading(false);
    setShortSelected("");
    setMediumSelected("");
    setLongSelected("");
  }, [items]);

  const selectLength = function (length) {
    setLength(length);
    if (length === shortResponse) {
      setShortSelected("selected");
      setMediumSelected("");
      setLongSelected("");
    } else if (length === mediumResponse) {
      setShortSelected("");
      setMediumSelected("selected");
      setLongSelected("");
    } else if (length === longResponse) {
      setShortSelected("");
      setMediumSelected("");
      setLongSelected("selected");
    }
  };
  // Make sure each item is rendered from newest to oldest
  const inOrder = items.slice().reverse();
  return (
    <div>
      <div className="text">
        RESPONSE LENGTH
        <button
          className={shortSelected}
          onClick={() => selectLength(shortResponse)}
        >
          Short
        </button>
        <button
          className={mediumSelected}
          onClick={() => selectLength(mediumResponse)}
        >
          Medium
        </button>
        <button
          className={longSelected}
          onClick={() => selectLength(longResponse)}
        >
          Long
        </button>
      </div>
      <div className="submit">
        <button onClick={() => submitPrompt(input.input)}>Submit</button>
        <div className="button-container">
          {isLoading ? <div class="lds-dual-ring"></div> : ""}
        </div>
      </div>

      <div className="responses">
        {inOrder.map((thing) => {
          console.log("THING RES: ", thing.response);
          return (
            <article class="leaderboard__profile">
              <span class="leaderboard__name">{thing.prompt}</span>
              <br></br>
              <span class="leaderboard__value">{thing.response}</span>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default ResponseItems;
