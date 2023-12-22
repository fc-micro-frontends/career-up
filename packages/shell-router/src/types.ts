import { type RouteObject } from "react-router-dom";

export type RouterType = "browser" | "memory";

export interface CreateRouterProps {
  type: RouterType;
  routes: RouteObject[];
  basePath?: string;
}
