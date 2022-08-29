import React, { useState, useEffect } from "react";

function Youjin() {
  const [state, setState] = useState();
  const [code, setCode] = useState(1);
  console.log("test2");

  const test = "1";

  useEffect(() => {
    fetch(`http://www.wecode.kr/${code}`)
      .then((res) => res.json())
      .then(setState);
  }, []);
  console.log("hete");
  return (
    <div className="Youjin">
      <header className="App-header">
        <img className="App-logo" />
        <p onClick={() => setCode((prev) => prev + 1)}>Edit </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
