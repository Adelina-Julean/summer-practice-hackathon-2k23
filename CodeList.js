import React from "react";
import "./CodeList.css";
import { useState } from "react";

const CodeList = (props) => {
  const [isShown, setIsShown] = useState(true);
  const handleClick = (event) => {
    setIsShown(false);
  };

  return (
    <ul className="list">
      {props.list.map((elem) => {
        return (
          <li>
            <button className="btn" onClick={handleClick}>
              Delete
            </button>

            {isShown && (
              <div>
                <tr>
                  <td id="code">{elem.number}</td>
                </tr>
                <tr>
                  <td id="name">{elem.text}</td>
                </tr>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default CodeList;
