import React, { useState } from "react";

const HtmlTagRemoverApp = () => {
  const [inputString, setInputString] = useState("");
  const [outputString, setOutputString] = useState("");

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const handleRemoveTags = () => {
    const withoutTags = inputString.replace(/<\/?[^>]+(>|$)/g, ""); // Use a regular expression to remove HTML tags
    setOutputString(withoutTags);
  };

  return (
    <div>
      <h1>HTML Tag Remover App</h1>
      <textarea
        style={{
          width: "600px",
          height: "250px",
        }}
        placeholder="Enter a string with HTML tags..."
        value={inputString}
        onChange={handleInputChange}
      ></textarea>
      <br />
      <button onClick={handleRemoveTags}>Remove HTML Tags</button>
      <br />
      <div>
        <strong>Output:</strong>
        <div>{outputString}</div>
      </div>
    </div>
  );
};

export default HtmlTagRemoverApp;
