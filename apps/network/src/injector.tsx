import { injectFactory } from "@career-up/shell-router";
import { routes } from "./routes";

import "./index.scss";

const inject = injectFactory({
  routes,
});

export default inject;
