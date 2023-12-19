import React from "react";
import ReactDOM from "react-dom";

import "@career-up/ui-kit/index.css";
import { Button, Icon } from "@career-up/ui-kit";
import { test } from "@career-up/shell-router";

test();

const App = () => (
  <div className="container">
    <div>Name: shell</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <div>
      <Button>Hello</Button>
    </div>
    <div>
      <Icon.Briefcase />
    </div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
