import { type RouteObject } from "react-router-dom";
import { injectFactory } from "./injector";

export type RouterType = "browser" | "memory";

export interface CreateRouterProps {
  type: RouterType;
  routes: RouteObject[];
  basePath?: string;
}

export type InjectFuncType = ReturnType<typeof injectFactory>;
