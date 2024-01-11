import { style } from "../styles/f.css";

export const wrapper = [
  style([
    "flex",
    "flex-col",
    "bg-white",
    "p-4",
    "rounded-lg",
    "gap-4",
    "border-solid",
    "border",
    "border-slate-700",
    "items-center",
  ]),
  "hover:" + style(["border-blue-600", "cursor-pointer"]),
].join(" ");

export const picture = style(["w-12"]);

export const name = style(["text-base", "font-bold"]);

export const role = style(["text-xs", "text-gray-600"]);

export const networkCount = style(["text-xs", "text-gray-600"]);
