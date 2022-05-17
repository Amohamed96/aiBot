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

  const responses = ["RES"];
  const record = {};
  let count = 0;
  let countResponses = window.localStorage.getItem(count);

  function clickCounter() {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    // document.getElementById("demo").innerHTML = localStorage.clickcount;
  }

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
        record.prompt = `${input}`;
        record.response = `${data.choices[0].text}`;
        console.log(data);
        const slicedArray = data.choices[0].text.slice(0, 10);
        // responses.push(
        //   window.localStorage.setItem(
        //     `${window.localStorage.getItem("clickcount")}`,
        //     JSON.stringify(record)
        //   )
        // );
        // responses.values = record;
        window.localStorage.setItem(
          window.localStorage.getItem("clickcount"),
          JSON.stringify(record)
        );
        console.log("RECORD:", record);
        console.log("RESPONSES", responses);
        window.location.reload();
      });
    });
  };

  const clickButton = function () {
    submitPrompt();
    clickCounter();
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
        <button className="btn" onClick={clickButton}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default Prompt;
