import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (test) {
      console.log("test > ", test);
    }
  }, []);

  console.log("codacy test");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
