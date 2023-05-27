import React from "react";
import "./App.css";
import { useState } from "react";
import CodeList from "./components/CodeList/CodeList";
import NewCode from "./components/NewCode/NewCode";

function App() {
  const [codes, SetCodes] = useState([]);

  const addNewCodeHandler = (newCode) => {
    SetCodes((prevCode) => prevCode.concat(newCode));
  };

  return (
    <div className="authentificator-form">
      <h2>Authenticator</h2>
      <NewCode onNewCode={addNewCodeHandler} />
      <CodeList list={codes} />
    </div>
  );
}

export default App;
