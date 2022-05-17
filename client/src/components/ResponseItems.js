import React, { useState } from "react";
import { OpenAIApi } from "openai";

const openai = new OpenAIApi();

const SubmitPrompt = function () {
  const [val, setVal] = useState();
  const searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
  });

  const data = {
    prompt: val,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };
  fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${"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"}`,
    },
    body: JSON.stringify(data),
  }).then((response) => {
    response.json().then((data) => {
      console.log(data.choices[0]);
      window.localStorage.setItem("responses", data.choices[0].text);
    });
  });
};

function ResponseItems() {
  return (
    <div>
      {" "}
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
              ></input>
            }
          </div>
          <button className="btn" onClick={SubmitPrompt}>
            Submit
          </button>
        </div>
      </div>
      {window.localStorage.getItem("responses")}
    </div>
  );
}

export default ResponseItems;
