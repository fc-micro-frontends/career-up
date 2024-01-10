import { atom } from "jotai";
import { type CourseType, type UserType } from "./types";

export const userAtom = atom<UserType | null>(null);

export const coursesAtom = atom<CourseType[]>([]);
