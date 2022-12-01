import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  
  const handleclearClick = () => {
    let newText = '';
    setText(newText);
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = ()=>{
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.ariaSelected();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  } 


  const [text, setText] = useState("");
}

return (
  <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="MyBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleclearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy
      </button>
    </div>
    <div className="container my-3">
      <h2>your text summary</h2>
      <p>
        {text.split("").length}words and {text.length} characters{" "}
      </p>
      <p>{0.008 * text.split("").length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
);
