import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState(""); // Initial state



  const handleOnChange = (event) => {
    setText(event.target.value); // Update text state with user input
  };

  const textHandlerClick = () => {
    let newText = text.toUpperCase(); // Convert text to uppercase
    setText(newText);
    props.showAlert("Converted to Uppercase", "Success");
  };

  const handleLowerClick = () => {
    let newText = text.toLowerCase(); // Convert text to lowercase
    setText(newText);
    props.showAlert("Converted to Lowercase", "Success");
  };

  const handleClearClick = () => {
    setText(""); // Clear text
    props.showAlert("Cleared all text", "Success");
  };

  const handleCopyClick = () => {
    let textarea = document.getElementById("myBox");
    if (textarea) {
      textarea.select();
      navigator.clipboard.writeText(textarea.value);
      props.showAlert("Copied to clipboard", "Success");
    }
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/).join(" "); // Remove extra spaces
    setText(newText);
    props.showAlert("Extra spaces removed", "Success");
  };


  const handleReadAloud = (language = "en-US") => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.lang = language; // Set language
    speech.rate = 1; // Speed (1 is normal)
    speech.pitch = 1; // Pitch (1 is normal)
    
    window.speechSynthesis.speak(speech);
};

  return (
    <>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#010a16" }}>
        <h1>{props.heading}</h1>
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "#010a16" : "white",
            color: props.mode === "dark" ? "white" : "#010a16",
          }}
          className="form-control"
          value={text}
          rows="8"
          id="myBox"
          placeholder="Enter your text here..."
          onChange={handleOnChange}
        ></textarea>
        <button className="btn btn-secondary my-2 ms-2" onClick={textHandlerClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary my-2 ms-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-secondary my-2 ms-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-secondary my-2 ms-2" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button className="btn btn-secondary my-2 ms-2" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>

     

        <button className="btn btn-secondary my-2 ms-2" onClick={handleReadAloud}>
        Read Aloud
        </button>
      </div>

      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#010a16" }}>
        <h2>Your Text Summary</h2>
        <p>
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters
        </p>
        <p>{(0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)).toFixed(2)} Minutes Read</p>
        <h2>Preview</h2>
        <div
          style={{
            maxWidth: "100%",
            wordWrap: "break-word",
            overflowX: "hidden",
          }}
        >
          {text.length > 0 ? text : "Enter something in the textbox to preview it here"}
        </div>
      </div>
    </>
  );
}
