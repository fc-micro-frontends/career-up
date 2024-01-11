import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/rootReducer";

const create = () => {
  const store = configureStore({ reducer });

  return store;
};

export default create;

export type RootState = ReturnType<ReturnType<typeof create>["getState"]>;
export type AppDispatch = ReturnType<typeof create>["dispatch"];
