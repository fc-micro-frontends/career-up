import React from "react";
import ReactDOM from "react-dom";

import "@career-up/ui-kit/index.css";
import { Button } from "@career-up/ui-kit";

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <div>
      <Button />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
