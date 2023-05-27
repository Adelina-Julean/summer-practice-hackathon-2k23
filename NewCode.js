import React from "react";
import "./NewCode.css";

import { useState, useEffect } from "react";

import "./NewCode.css";

const NewCode = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [time, setTime] = useState(new Date());

  const addCodeHandler = (event) => {
    event.preventDefault();

    const newCode = {
      number: Math.floor(100000 + Math.random() * 900000),
      text: enteredText,
    };

    setEnteredText(setIsShown(false));

    props.onNewCode(newCode);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const handleClick = (event) => {
    setIsShown(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        +
      </button>

      {isShown && (
        <div>
          <form className="new-code" onSubmit={addCodeHandler}>
            <h1>Write your name:</h1>
            <input
              type="text"
              value={enteredText}
              onChange={textChangeHandler}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default NewCode;
