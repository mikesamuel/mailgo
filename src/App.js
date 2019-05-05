import React from "react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="mailgo.png" />
        <h1>mailgo</h1>
        <code className="code">
          WIP,{" "}
          <a class="App-link" href="https://github.com/manzinello/mailgo">
            GitHub
          </a>
          <br />
          <br />
          a classic mailto
          <br />
          <a class="App-link no-mailgo" href="mailto:matteo@manzinello.dev">
            matteo@manzinello.dev
          </a>
          <br />
          with <strong>mailgo</strong>
          <br />
          <a class="App-link" href="mailto:matteo@manzinello.dev">
            matteo@manzinello.dev
          </a>
          <br />
          <br />
          <u>
            less then <strong>7KB</strong>
          </u>
          <br />
          <br />a project by
          <br />
          <a class="App-link" href="https://matteomanzinello.com">
            matteo manzinello
          </a>
        </code>
      </header>
    </div>
  );
}

export default App;
