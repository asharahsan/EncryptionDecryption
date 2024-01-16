import React, { useState } from "react";
import { createPopper } from "@popperjs/core";

const button = document.querySelector("#button");
const tooltip = document.querySelector("#tooltip");

// Pass the button, the tooltip, and some options, and Popper will do the
// magic positioning for you:
createPopper(button, tooltip, {
  placement: "right",
});

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [result, setAns] = useState("Choose an option to analyze");

  const handleUpClick = () => {
    // //console.log("Uppercase was clicked" + text);
    let newText = text;
    let charArray = newText.split("");
    // //console.log(charArray);
    let intARray = [0];
    for (let i = 0; i < charArray.length; i++) {
      intARray[i] = charArray[i].charCodeAt(0);
    }
    // //console.log(intARray);
    let binString = "";
    for (let i = 0; i < intARray.length; i++) {
      let a = intARray[i].toString(2);
      while (a.length < 8) {
        a = "0" + a;
      }
      binString += a;
    }
    // //console.log(binString);
    while (binString.length % 6 !== 0) {
      binString += "0";
    }

    let newbinString = "";
    for (let i = 0; i < binString.length; i++) {
      if (binString[i] === "0") {
        newbinString += "1";
      } else {
        newbinString += "0";
      }
    }
    // //console.log(newbinString);
    let result = [0];
    for (let i = 0; i * 6 < newbinString.length; i++) {
      result[i] = 47 + parseInt(newbinString.substring(i * 6, (i + 1) * 6), 2);
    }
    // ////console.log(result);
    let newResult = "";
    for (let i = 0; i < result.length; i++) {
      newResult += String.fromCharCode(result[i]);
    }
    // ////console.log(newResult);
    // ////console.log(binString);

    setAns(newResult);
  };

  const handleLowClick = () => {
    let newText = text;
    let charArray = newText.split("");
    // ////console.log(charArray);
    let intARray = [0];
    for (let i = 0; i < charArray.length; i++) {
      intARray[i] = charArray[i].charCodeAt(0) - 47;
    }
    // ////console.log(intARray);
    let binString = "";
    for (let i = 0; i < intARray.length; i++) {
      let a = intARray[i].toString(2);
      while (a.length < 6) {
        a = "0" + a;
      }
      binString += a;
    }
    // //console.log(binString);

    let newbinString = "";
    for (let i = 0; i < binString.length; i++) {
      if (binString[i] === "0") {
        newbinString += "1";
      } else {
        newbinString += "0";
      }
    }
    // //console.log(newbinString);
    let result = [0];
    for (let i = 0; i * 8 < newbinString.length; i++) {
      result[i] = parseInt(newbinString.substring(i * 8, (i + 1) * 8), 2);
    }
    // //console.log(result);
    let newResult = "";
    for (let i = 0; i < result.length; i++) {
      newResult += String.fromCharCode(result[i]);
    }
    // //console.log(newResult);
    // //console.log(binString);

    setAns(newResult);
  };

  const handleClearClick = () => {
    // //console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    setAns(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    //console.log(text);
    handleUpClick();

    // //console.log("On change" + text);
  };
  const er = () => {
    alert("You can't type here");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    // document.getSelection().removeAllRanges();
    alert("Text copied is: " + result);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <h1 className="my-3">{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          placeholder="Enter text here"
          rows="4"
          value={text}
          onChange={handleOnChange}
          style={{
            "text-shadow": "0 .05rem .1rem rgba(0, 0, 0, .5)",
            "box-shadow": "#dee2e6b3 1rem 1rem 4rem 3rem inset",
          }}
        ></textarea>
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            className="btn btn-success my-3"
            onClick={handleUpClick}
            //   style={{ margin: "10px" }}
          >
            Encrypt
          </button>
          <button
            className="btn btn-danger my-3"
            onClick={handleLowClick}
            //   style={{ margin: "10px" }}
          >
            Decrypt
          </button>
        </div>
        <button
          className="btn btn-secondary my-3 mx-2"
          onClick={handleCopy}
          title="Copy to clipboard"
          style={{ color: "white" }}
          >
          Copy Result
        </button>

        <button
          className="btn btn-warning my-3 mx-2"
          onClick={handleClearClick}
          title="Clear text"
          // style={{ color: "white" }}
          //   style={{ margin: "10px" }}
        >
          Clear
        </button>
        <h1 className="my-3">Results :</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
          value={result}
          onChange={er}
          style={{
            "text-shadow": "0 .05rem .1rem rgba(0, 0, 0, .5)",
            "box-shadow": "#dee2e6b3 1rem 1rem 4rem 3rem inset",
          }}
        ></textarea>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </div>
  );
}
