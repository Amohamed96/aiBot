import React, { useState, useEffect } from "react";
import { OpenAIApi } from "openai";

const openai = new OpenAIApi();

function ResponseItems() {
  const [responses, setResponses] = useState("");
  function allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    console.log(responses);
    setResponses(values);
  }

  useEffect(() => {
    allStorage();
  }, []);

  return (
    <div>
      <div>
        Responses<div className="responses">{responses}</div>
      </div>
    </div>
  );
}

export default ResponseItems;
