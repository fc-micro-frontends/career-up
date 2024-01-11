import { style } from "../styles/f.css";

export const topAreaTitle = style([
  "text-base",
  "font-bold",
  "h-4",
  "leading-4",
]);

export const topArea = style([
  "flex",
  "flex-col",
  "bg-white",
  "px-3",
  "py-4",
  "border-solid",
  "border-b",
  "border-slate-700",
  "rounded-tr-lg",
  "rounded-tl-lg",
  "gap-2",
]);

export const topAreaLinks = style([
  "flex",
  "flex-col",
  "bg-white",
  "py-2",
  "border-b",
]);

export const topAreaLink = [
  style([
    "flex",
    "flex-row",
    "text-base",
    "text-gray-600",
    "py-2",
    "px-3",
    "justify-between",
  ]),
  "hover:" + style(["bg-gray-200", "cursor-pointer"]),
].join(" ");

export const topAreaLinkCount = style(["text-base", "text-gray-600"]);

export const img = style(["w-12"]);

export const name = style(["text-base", "font-bold"]);

export const email = style(["text-xs", "text-gray-600"]);

export const bottomArea = style([
  "flex",
  "flex-col",
  "bg-white",
  "px-3",
  "py-4",
  "rounded-br-lg",
  "rounded-bl-lg",
  "gap-2",
  "justify-center",
  "items-center",
]);
