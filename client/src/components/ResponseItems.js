import React, { useState } from "react";
import { OpenAIApi } from "openai";

const openai = new OpenAIApi();

function ResponseItems() {
  return (
    <div>
      <div>
        Responses<div></div>
        {window.localStorage.getItem("responses")}
      </div>
    </div>
  );
}

export default ResponseItems;
