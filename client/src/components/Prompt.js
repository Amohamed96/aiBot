import React, { useState } from "react";

function Prompt(props) {
  const inputHandle = props.inputHandler;
  const input = props.input;
  const data = {
    prompt: input,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const responses = [];

  const submitPrompt = function () {
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"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"}`,
      },
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        responses.push(
          window.localStorage.setItem(`${data.id}`, data.choices[0].text)
        );
        window.location.reload();
      });
    });
  };

  return (
    <div>
      Prompt
      <div>
        <div>
          {
            <input
              type="text"
              name="searchBar"
              id="searchBar"
              className="prompt-box"
              placeholder="Give Genos a prompt"
              onChange={inputHandle}
            ></input>
          }
        </div>
        <button className="btn" onClick={submitPrompt}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Prompt;
