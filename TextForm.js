import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpper = () => {
    console.log("handleupper");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlerts("text changed to UpperCase", "success");
  };
  const handleClear = () => {
    setText("");
    console.log("clear");
    props.showAlerts("text has been cleared", "success");
  };

  const handleChange = (e) => {
    console.log("handlechange");
    setText(e.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlerts("text copied to Clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlerts("Extra spaces have been removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="exampleFormControlTextarea1"
            rows="6"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpper}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text
              .replace(/\n/g, " ")
              .split(" ")
              .filter((value) => value !== "").length
          }{" "}
          words and {text.trim().length} characters
        </p>
        <h2>Preview Text</h2>
        <p>{text.length > 0 ? text : "Enter text to preview "}</p>
      </div>
    </>
  );
}
