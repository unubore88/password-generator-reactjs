import React, { useState, useRef } from "react";
import {
  numberAscii,
  lowercaseAscii,
  uppercaseAscii,
  symbolAscii,
} from "./ASCII/generate-ascii";

const App = () => {
  const [password, setPassword] = useState("");
  const [isNumberPresent, setIsNumberPresent] = useState(false);
  const [isUppercasePresent, setIsUppercasePresent] = useState(false);
  const [isSymbolPresent, setIsSymbolPresent] = useState(false);
  const [value, setValue] = useState(0);
  const passwordRef = useRef(null);

  const rangeAndNumberValue = (e) => {
    let value = e.target.value;
    setValue(value);
  };

  const isNumberChecked = (e) => {
    e.target.checked ? setIsNumberPresent(true) : setIsNumberPresent(false);
  };

  const isUppercaseChecked = (e) => {
    e.target.checked
      ? setIsUppercasePresent(true)
      : setIsUppercasePresent(false);
  };

  const isSymbolChecked = (e) => {
    e.target.checked ? setIsSymbolPresent(true) : setIsSymbolPresent(false);
  };

  const onClickCopy = () => {
    passwordRef.current.select();
    document.execCommand("copy");
    alert(`your password : ${password} has been copied in your clipboard`);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    let mdp = [];
    let lowercase = lowercaseAscii();
    let uppercase = uppercaseAscii();
    let number = numberAscii();
    let symbols = symbolAscii();
    let array = lowercase;
    if (isNumberPresent) {
      array = array.concat(number);
    }
    if (isUppercasePresent) {
      array = array.concat(uppercase);
    }
    if (isSymbolPresent) {
      array = array.concat(symbols);
    }
    for (let i = 1; i <= value; i++) {
      let random = Math.floor(Math.random() * array.length);
      mdp.push(array[random]);
    }
    setPassword(mdp.join(""));
  };

  return (
    <div className="container">
      <h2>Password generator</h2>
      <div className="mdp-container">
        <input type="text" ref={passwordRef} readOnly value={password} />
        <button
          onClick={() => onClickCopy()}
          disabled={!password ? true : false}
        >
          Copy!
        </button>
      </div>
      <form onSubmit={onSubmitForm} className="form-container">
        <label htmlFor="">Numbers of characters</label>
        <div>
          <input
            onChange={rangeAndNumberValue}
            value={value}
            type="range"
            min="1"
            max="50"
          />
          <input
            onChange={rangeAndNumberValue}
            value={value}
            type="number"
            min="1"
            max="50"
          />
        </div>
        <label htmlFor="">Include Numbers 0-9</label>
        <input onChange={isNumberChecked} type="checkbox" />

        <label>Include Uppercase A-Z</label>
        <input onChange={isUppercaseChecked} type="checkbox" />

        <label htmlFor="">Include Symbols (!?:/_\, ...)</label>
        <input onChange={isSymbolChecked} type="checkbox" />

        <button>Generate password</button>
      </form>
    </div>
  );
};

export default App;
