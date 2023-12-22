import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { type CreateRouterProps } from "./types";

type Router =
  | ReturnType<typeof createBrowserRouter>
  | ReturnType<typeof createMemoryRouter>;

export function createRouter({
  type,
  routes,
  basePath,
}: CreateRouterProps): Router {
  switch (type) {
    case "browser":
      return createBrowserRouter(routes);
    case "memory":
      return createMemoryRouter(routes, { initialEntries: [basePath || "/"] });
  }
}
