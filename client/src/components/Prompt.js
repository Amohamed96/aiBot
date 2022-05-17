import React, { useState } from "react";

function Prompt() {
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
            ></input>
          }
        </div>
        <button className="btn">Submit</button>
      </div>
    </div>
  );
}

export default Prompt;
